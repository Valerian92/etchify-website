'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { useLocale } from '@/lib/LocaleProvider';

export function Footer() {
  const { dict } = useLocale();

  return (
    <footer className="border-t border-brand-border bg-brand-darker">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6 text-brand-primary" />
              <p className="text-lg font-bold">
                <span className="text-brand-primary">Etch</span>ify
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {dict.footer.product}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/#features" className="text-sm text-gray-400 transition-colors hover:text-white">{dict.nav.features}</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 transition-colors hover:text-white">{dict.nav.pricing}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {dict.footer.legal}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-white">{dict.footer.privacy}</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 transition-colors hover:text-white">{dict.footer.terms}</Link></li>
              <li><Link href="/legal" className="text-sm text-gray-400 transition-colors hover:text-white">{dict.footer.imprint}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              {dict.footer.contact}
            </h3>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:support@etchify.app" className="text-sm text-gray-400 transition-colors hover:text-white">support@etchify.app</a></li>
              <li><a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-white">alpin-code.de</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-border pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {dict.footer.copyright}{' '}
          <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            Alpin-Code
          </a>
        </div>
      </div>
    </footer>
  );
}
