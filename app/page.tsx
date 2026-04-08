"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const GREETING = "你好，欢迎来到森纳健康。";
const TYPE_SPEED = 90;
const BREATHE_DURATION = 4000;

interface Message {
  role: "assistant" | "user";
  text: string;
}

export default function LandingPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"breathe" | "settle" | "typing" | "done">("breathe");
  const [typedText, setTypedText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Phase: breathe (4s) -> settle (1.2s shrink+settle) -> typing -> done
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("settle"), BREATHE_DURATION);
    const t2 = setTimeout(() => setPhase("typing"), BREATHE_DURATION + 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Typing effect
  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(GREETING.slice(0, i));
      if (i >= GREETING.length) {
        clearInterval(interval);
        setPhase("done");
        setTimeout(() => setShowInput(true), 500);
      }
    }, TYPE_SPEED);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (showInput && inputRef.current) inputRef.current.focus();
  }, [showInput]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "assistant", text: "感谢您的留言，我们的健康顾问将尽快与您联系。" },
    ]);
    setInputValue("");
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") { e.preventDefault(); handleSend(); }
  };

  const showText = phase === "typing" || phase === "done";
  const hasMessages = messages.length > 0;

  return (
    <div className="landing">
      <div className="landing-logo">森纳 Sanare</div>

      <div className="landing-center">
        {!hasMessages ? (
          <div className="landing-greeting">
            {/* Breathing orb */}
            <div className={`watch-face ${phase === "settle" ? "watch-face-settle" : ""} ${showText ? "watch-face-settled" : ""}`}>
              {(phase === "breathe") && (
                <>
                  <div className="watch-circle" />
                  <div className="watch-circle" />
                  <div className="watch-circle" />
                  <div className="watch-circle" />
                  <div className="watch-circle" />
                  <div className="watch-circle" />
                </>
              )}
              {(phase !== "breathe") && (
                <div className="watch-circle-static" />
              )}
            </div>

            {/* Typed greeting */}
            <div className={`landing-typed-wrap ${showText ? "landing-typed-visible" : ""}`}>
              <p className="landing-typed">
                {typedText}
                {phase === "typing" && <span className="landing-cursor" />}
              </p>
            </div>
          </div>
        ) : (
          /* Chat container */
          <div className="landing-chat">
            <div className="landing-chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`landing-bubble ${msg.role === "user" ? "landing-bubble-send" : "landing-bubble-receive"}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      {showInput && (
        <div className="landing-input-bar">
          <input
            ref={inputRef}
            type="text"
            className="landing-bar-input"
            placeholder="输入您的健康需求..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="landing-bar-send"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            aria-label="发送"
          >
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>
      )}

      <button className="landing-skip" onClick={() => router.push("/home")}>
        跳转到主页 &gt;&gt;
      </button>
    </div>
  );
}
