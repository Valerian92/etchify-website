'use client';

import { useLocale } from '@/lib/LocaleProvider';

const SHOPIFY_APP_URL = 'https://apps.shopify.com/etchify';

type PlanKey = 'free' | 'starter' | 'professional' | 'business';

const PLANS: {
  key: PlanKey;
  name: string;
  price: string;
  productCount: number | null;
  featureKeys: string[];
  highlighted: boolean;
}[] = [
  {
    key: 'free',
    name: 'Free',
    price: '$0',
    productCount: 1,
    featureKeys: ['canvasEditor', 'textShapes', 'svgExport', 'communitySupport'],
    highlighted: false,
  },
  {
    key: 'starter',
    name: 'Starter',
    price: '$19',
    productCount: 10,
    featureKeys: ['allFromFree', 'imageUpload', 'qrCodes', 'pngExport', 'emailSupport'],
    highlighted: false,
  },
  {
    key: 'professional',
    name: 'Professional',
    price: '$49',
    productCount: 50,
    featureKeys: ['allFromStarter', 'customerAccounts', 'designLinks', 'pdfExport', 'prioritySupport'],
    highlighted: true,
  },
  {
    key: 'business',
    name: 'Business',
    price: '$99',
    productCount: null,
    featureKeys: ['allFromProfessional', 'unlimitedProducts', 'customBranding', 'apiAccess', 'dedicatedSupport'],
    highlighted: false,
  },
];

export function PricingTable() {
  const { dict } = useLocale();
  const pf = dict.pricing.features as Record<string, string>;

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          {dict.pricing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-400">
          {dict.pricing.subtitle}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => {
            const period = plan.key === 'business'
              ? `${dict.pricing.perMonth} + 0.5%`
              : dict.pricing.perMonth;
            const products = plan.productCount === null
              ? dict.pricing.unlimited
              : `${plan.productCount} ${plan.productCount === 1 ? dict.pricing.product : dict.pricing.products}`;

            return (
              <div
                key={plan.key}
                className={`relative rounded-2xl border p-6 ${
                  plan.highlighted
                    ? 'border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/10'
                    : 'border-brand-border bg-brand-muted/30'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-3 py-0.5 text-xs font-semibold">
                    {dict.pricing.popular}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-500">{period}</span>
                </div>
                <p className="mt-2 text-sm text-brand-primary">{products}</p>

                <ul className="mt-6 space-y-2">
                  {plan.featureKeys.map((fk) => (
                    <li key={fk} className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
                      <span className="mt-0.5 text-brand-primary">&#10003;</span>
                      {pf[fk] || fk}
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
                  {dict.pricing.plans[plan.key].cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
