'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useLocale } from '@/lib/LocaleProvider';

const SHOPIFY_APP_URL = 'https://apps.shopify.com/etchify';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict } = useLocale();

  const navLinks = [
    { href: '/#features', label: dict.nav.features },
    { href: '/pricing', label: dict.nav.pricing },
    { href: '/legal', label: dict.nav.contact },
  ];

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-brand-border bg-brand-dark/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-brand-text">
          <Logo className="h-7 w-7 text-brand-primary" />
          <span>
            <span className="text-brand-primary">Etch</span>ify
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-text"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={SHOPIFY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-secondary"
          >
            {dict.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-text-secondary"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid transition-all duration-200 ease-in-out md:hidden ${
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-brand-border bg-brand-dark px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-brand-text-secondary hover:text-brand-text"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 py-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <a
              href={SHOPIFY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-brand-primary px-4 py-2 text-center text-sm font-medium text-white"
            >
              {dict.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
