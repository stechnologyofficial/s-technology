import { Language } from "@/types/i18n";
import enTranslations from "@/data/i18n/yttracker/en.json";

type Translation = typeof enTranslations;

let currentLanguage: Language = "en";
const translations: Record<Language, Translation> = {
  en: enTranslations,
};

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
};

export const getLanguage = (): Language => {
  return currentLanguage;
};

export const t = (key: string): string => {
  const keys = key.split(".");
  let value: any = translations[currentLanguage];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
};

