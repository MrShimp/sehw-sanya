import zhData from "../../locales/zh.json";
import enData from "../../locales/en.json";
import ruData from "../../locales/ru.json";
import viData from "../../locales/vi.json";
import thData from "../../locales/th.json";

export const translations: Record<string, typeof zhData> = {
  zh: zhData,
  en: enData,
  ru: ruData,
  vi: viData,
  th: thData,
};

export type TranslationData = typeof zhData;
