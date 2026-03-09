const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/Monat',
    products: '1 Produkt',
    features: ['Canvas Editor', 'Text & Formen', 'SVG Export', 'Community Support'],
    cta: 'Kostenlos starten',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/Monat',
    products: '10 Produkte',
    features: ['Alles aus Free', 'Bild-Upload', 'QR-Codes', 'PNG Export', 'Email Support'],
    cta: 'Jetzt starten',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/Monat',
    products: '50 Produkte',
    features: ['Alles aus Starter', 'Kunden-Konten', 'Design-Links', 'PDF Export', 'Prioritäts-Support'],
    cta: 'Jetzt starten',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$99',
    period: '/Monat + 0.5%',
    products: 'Unbegrenzt',
    features: ['Alles aus Professional', 'Unbegrenzte Produkte', 'Custom Branding', 'API-Zugang', 'Dedicated Support'],
    cta: 'Kontaktieren',
    highlighted: false,
  },
];

const SHOPIFY_APP_URL = 'https://apps.shopify.com/etchify';

export function PricingTable() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Einfache, transparente Preise
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-400">
          Starte kostenlos. Upgrade wenn du wachsen willst.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 ${
                plan.highlighted
                  ? 'border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/10'
                  : 'border-brand-border bg-brand-muted/30'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-3 py-0.5 text-xs font-semibold">
                  Beliebt
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-brand-primary">{plan.products}</p>

              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-0.5 text-brand-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={SHOPIFY_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-lg py-2.5 text-center text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-brand-primary text-white hover:bg-brand-secondary'
                    : 'border border-brand-border text-gray-300 hover:border-gray-500 hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
