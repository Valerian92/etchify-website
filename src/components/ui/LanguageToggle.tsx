'use client';

import { useLocale } from '@/lib/LocaleProvider';

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
      className="rounded-md px-2 py-1 text-xs font-medium text-gray-400 transition-colors hover:text-white border border-brand-border hover:border-gray-500"
      aria-label={locale === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </button>
  );
}
