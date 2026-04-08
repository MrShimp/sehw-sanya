"use client";

import { useState, useCallback, useEffect, type ReactNode } from "react";
import { I18nContext, type Language } from "./context";
import { translations } from "./translations";

const STORAGE_KEY = "sanare-lang";
const VALID_LANGUAGES: Language[] = ["zh", "en", "ru", "vi", "th"];

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "zh";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_LANGUAGES.includes(stored as Language)) {
      return stored as Language;
    }
  } catch {
    // localStorage not available
  }
  return "zh";
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLanguageState(getInitialLanguage());
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage not available
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = translations[language];
      for (const k of keys) {
        if (current == null || typeof current !== "object") {
          return key;
        }
        current = current[k];
      }
      if (typeof current === "string") {
        return current;
      }
      return key;
    },
    [language]
  );

  if (!mounted) {
    return null;
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}
