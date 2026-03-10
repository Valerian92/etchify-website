'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { useLocale } from '@/lib/LocaleProvider';

export function Footer() {
  const { dict } = useLocale();

  return (
    <footer className="border-t border-brand-border bg-brand-darker">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6 text-brand-primary" />
              <p className="text-lg font-bold text-brand-text">
                <span className="text-brand-primary">Etch</span>ify
              </p>
            </div>
            <p className="mt-2 text-sm text-brand-text-secondary">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text-secondary">
              {dict.footer.product}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/#features" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">{dict.nav.features}</Link></li>
              <li><Link href="/pricing" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">{dict.nav.pricing}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text-secondary">
              {dict.footer.legal}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">{dict.footer.privacy}</Link></li>
              <li><Link href="/terms" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">{dict.footer.terms}</Link></li>
              <li><Link href="/legal" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">{dict.footer.imprint}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text-secondary">
              {dict.footer.contact}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:support@etchify.app" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">support@etchify.app</a></li>
              <li><a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-secondary transition-colors hover:text-brand-text">alpin-code.de</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-border pt-6 text-center text-xs text-brand-text-faint">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}{' '}
          <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-text">
            Alpin-Code
          </a>
        </div>
      </div>
    </footer>
  );
}
