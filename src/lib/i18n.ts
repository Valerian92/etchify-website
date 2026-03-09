import de from '@/locales/de.json';
import en from '@/locales/en.json';

const locales = { de, en } as const;
export type Locale = keyof typeof locales;

export function getLocale(): Locale {
  // For now, default to German. URL-based locale detection can be added later.
  return 'de';
}

export function getDictionary(locale: Locale = getLocale()) {
  return locales[locale];
}

export type Dictionary = ReturnType<typeof getDictionary>;
