'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/LocaleProvider';
import { useScrollReveal } from '@/lib/useScrollReveal';

const ITEMS = [
  { key: 'dashboard' as const, src: '/screenshots/dashboard.png', alt: 'Etchify Dashboard in Shopify Admin' },
  { key: 'configurator' as const, src: '/screenshots/configurator.png', alt: 'Etchify Konfigurator mit Material-Auswahl' },
  { key: 'engraving' as const, src: '/screenshots/text-engraved.png', alt: 'Text-Gravur Vorschau im Konfigurator' },
  { key: 'cart' as const, src: '/screenshots/cart-with-engraving.png', alt: 'Warenkorb mit personalisiertem Gravur-Produkt' },
];

export function Showcase() {
  const { dict } = useLocale();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="border-t border-brand-border py-16 sm:py-24" ref={ref} style={{ opacity: 0 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          {dict.showcase.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-brand-text-secondary">
          {dict.showcase.subtitle}
        </p>

        <div className="mt-12 space-y-16 sm:mt-20 sm:space-y-24">
          {ITEMS.map((item, i) => (
            <div
              key={item.key}
              className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Screenshot */}
              <div className="w-full lg:w-3/5">
                <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-muted/30 shadow-xl shadow-brand-primary/5">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full text-center lg:w-2/5 lg:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-lg font-bold text-brand-primary lg:mx-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-brand-text sm:text-2xl">
                  {dict.showcase[item.key].title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-text-secondary sm:text-lg">
                  {dict.showcase[item.key].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
