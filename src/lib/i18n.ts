import de from '@/locales/de.json';
import en from '@/locales/en.json';

export const locales = { de, en } as const;
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = 'de';

export function getDictionary(locale: Locale) {
  return locales[locale];
}

export type Dictionary = typeof de;
