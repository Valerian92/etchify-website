const SHOPIFY_APP_URL = 'https://apps.shopify.com/etchify';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="mb-4 inline-block rounded-full border border-brand-border px-4 py-1.5 text-xs font-medium text-brand-primary">
          Shopify App für Gravur & Print Shops
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Dein Produkt.{' '}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Ihr Design.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          Kunden gestalten individuelle Gravuren und Drucke direkt in deinem Shop.
          Du erhältst produktionsfertige Dateien — SVG, PNG oder PDF.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SHOPIFY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brand-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all hover:bg-brand-secondary hover:shadow-brand-secondary/25"
          >
            Kostenlos installieren
          </a>
          <a
            href="#features"
            className="rounded-xl border border-brand-border px-8 py-3 text-base font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            Mehr erfahren
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          Keine Kreditkarte nötig · Free Plan verfügbar · In 5 Minuten eingerichtet
        </p>
      </div>
    </section>
  );
}
