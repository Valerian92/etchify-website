'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/LocaleProvider';

const SHOPIFY_APP_URL = 'https://apps.shopify.com/etchify';

export function Hero() {
  const { dict } = useLocale();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="mb-6 inline-block rounded-full border border-brand-primary/30 bg-brand-primary/5 px-5 py-2 text-sm font-medium text-brand-primary">
          {dict.hero.badge}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl lg:text-7xl">
          {dict.hero.title1}{' '}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            {dict.hero.title2}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-text-secondary sm:text-xl">
          {dict.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SHOPIFY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brand-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all hover:bg-brand-secondary hover:shadow-brand-secondary/25"
          >
            {dict.hero.ctaPrimary}
          </a>
          <a
            href="#features"
            className="rounded-xl border border-brand-border px-8 py-3.5 text-base font-semibold text-brand-text-secondary transition-colors hover:border-brand-text-muted hover:text-brand-text"
          >
            {dict.hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-8 text-sm text-brand-text-muted">
          {dict.hero.trust}
        </p>

        {/* Product Preview — Browser Mockup */}
        <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-muted/30 shadow-2xl shadow-brand-primary/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-brand-border bg-brand-dark/80 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="mx-auto rounded-md bg-brand-muted/50 px-4 py-1 text-xs text-brand-text-muted">
                your-shop.myshopify.com/products/custom-engraving
              </div>
            </div>
            {/* Screenshot placeholder — replace src with actual screenshot */}
            <div className="relative aspect-[16/9] bg-brand-muted/20">
              <Image
                src="/hero-preview.webp"
                alt="Etchify Konfigurator — Canvas Editor mit Text, Bildern und QR-Codes"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                onError={(e) => {
                  // Hide broken image if file doesn't exist yet
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback when no image exists */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-text-muted">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl">&#9881;</div>
                  <p className="mt-3 text-sm">Konfigurator Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
