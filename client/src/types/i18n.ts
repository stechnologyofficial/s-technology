export type Language = "tr" | "en";

export interface Translation {
  [key: string]: string | Translation;
}

export interface I18nContent {
  tr: Translation;
  en: Translation;
}

