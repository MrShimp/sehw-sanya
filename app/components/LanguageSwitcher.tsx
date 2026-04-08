"use client";

import { useI18n } from "../i18n/context";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const toggle = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  return (
    <button
      onClick={toggle}
      className="lang-switcher"
      aria-label={language === "zh" ? "Switch to English" : "切换到中文"}
    >
      {language === "zh" ? "中/EN" : "EN/中"}
    </button>
  );
}
