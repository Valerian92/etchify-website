import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-darker">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold">
              <span className="text-brand-primary">Etch</span>ify
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Gravur & Print Konfigurator für Shopify
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Produkt
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/#features" className="text-sm text-gray-500 hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Rechtliches
            </h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-white">Datenschutz</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-white">AGB</Link></li>
              <li><Link href="/legal" className="text-sm text-gray-500 hover:text-white">Impressum</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Kontakt
            </h3>
            <ul className="mt-3 space-y-2">
              <li><a href="mailto:support@etchify.app" className="text-sm text-gray-500 hover:text-white">support@etchify.app</a></li>
              <li><a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white">alpin-code.de</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-border pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Valerian Huber. Built by{' '}
          <a href="https://alpin-code.de" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
            Alpin-Code
          </a>
        </div>
      </div>
    </footer>
  );
}
