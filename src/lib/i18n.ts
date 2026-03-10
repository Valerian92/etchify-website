import de from '@/locales/de.json';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';
import es from '@/locales/es.json';
import it from '@/locales/it.json';

export const locales = { de, en, fr, es, it } as const;
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
};

export const localeCodes: Record<Locale, string> = {
  de: 'DE',
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  it: 'IT',
};

export function getDictionary(locale: Locale) {
  return locales[locale];
}

export type Dictionary = typeof de;
