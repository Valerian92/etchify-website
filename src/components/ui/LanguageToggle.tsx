'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/LocaleProvider';
import { type Locale, localeNames, localeCodes } from '@/lib/i18n';
import { FlagIcon } from './FlagIcon';

const LOCALE_ORDER: Locale[] = ['de', 'en', 'fr', 'es', 'it'];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-brand-border px-3 py-1.5 text-sm font-medium text-brand-text-secondary transition-colors hover:border-brand-text-muted hover:text-brand-text"
        aria-label="Select language"
        aria-expanded={open}
      >
        <FlagIcon locale={locale} className="h-3 w-[18px] shrink-0 translate-y-[0.5px] rounded-[2px] shadow-sm" />
        <span>{localeCodes[locale]}</span>
        <svg className={`h-3 w-3 text-brand-text-muted transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] overflow-hidden rounded-xl border border-brand-border bg-brand-dark/95 shadow-xl backdrop-blur-lg">
          {LOCALE_ORDER.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                loc === locale
                  ? 'bg-brand-primary/10 text-brand-primary'
                  : 'text-brand-text-secondary hover:bg-brand-muted hover:text-brand-text'
              }`}
            >
              <FlagIcon locale={loc} className="h-3 w-[18px] shrink-0 translate-y-[0.5px] rounded-[2px] shadow-sm" />
              <span>{localeNames[loc]}</span>
              {loc === locale && (
                <svg className="ml-auto h-4 w-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
