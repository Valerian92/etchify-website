'use client';

import { useLocale } from '@/lib/LocaleProvider';

const FEATURE_KEYS = [
  { key: 'canvasEditor' as const, icon: '🎨' },
  { key: 'engravingPrint' as const, icon: '⚡' },
  { key: 'noCodeSetup' as const, icon: '🧩' },
  { key: 'productionFiles' as const, icon: '📦' },
];

export function Features() {
  const { dict } = useLocale();

  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          {dict.features.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-brand-text-secondary">
          {dict.features.subtitle}
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {FEATURE_KEYS.map((f) => (
            <div
              key={f.key}
              className="rounded-2xl border border-brand-border bg-brand-muted/50 p-8 transition-colors hover:border-brand-primary/30"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-brand-text">{dict.features[f.key].title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-text-secondary">{dict.features[f.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
