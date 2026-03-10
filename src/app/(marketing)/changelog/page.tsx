'use client';

import { useLocale } from '@/lib/LocaleProvider';

type ChangelogEntry = {
  version: string;
  date: string;
  tag: 'feature' | 'fix' | 'improvement';
  titleDe: string;
  titleEn: string;
  descDe: string;
  descEn: string;
};

const TAG_STYLES: Record<ChangelogEntry['tag'], { bg: string; text: string; labelDe: string; labelEn: string }> = {
  feature: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', labelDe: 'Feature', labelEn: 'Feature' },
  fix: { bg: 'bg-amber-500/10', text: 'text-amber-400', labelDe: 'Bugfix', labelEn: 'Bugfix' },
  improvement: { bg: 'bg-blue-500/10', text: 'text-blue-400', labelDe: 'Verbesserung', labelEn: 'Improvement' },
};

// Add new entries at the top
const ENTRIES: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2026-03-10',
    tag: 'feature',
    titleDe: 'Etchify Launch',
    titleEn: 'Etchify Launch',
    descDe: 'Erste Version von Etchify — Canvas Editor, Text & Formen, Bild-Upload, QR-Codes, SVG/PNG/PDF Export, 7-Step Wizard, Shopify Theme Extension.',
    descEn: 'First version of Etchify — Canvas Editor, Text & Shapes, Image Upload, QR Codes, SVG/PNG/PDF Export, 7-Step Wizard, Shopify Theme Extension.',
  },
];

export default function ChangelogPage() {
  const { locale } = useLocale();
  const isEn = locale === 'en';

  return (
    <section className="py-12 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-brand-text sm:text-4xl">Changelog</h1>
        <p className="mt-3 text-lg text-brand-text-secondary">
          {isEn
            ? 'All updates, new features and improvements at a glance.'
            : 'Alle Updates, neue Features und Verbesserungen auf einen Blick.'}
        </p>

        <div className="mt-10 space-y-0">
          {ENTRIES.map((entry, i) => {
            const tag = TAG_STYLES[entry.tag];
            return (
              <div key={i} className="relative border-l-2 border-brand-border py-8 pl-8 first:pt-0 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[7px] top-8 first:top-0 h-3 w-3 rounded-full border-2 border-brand-primary bg-brand-dark" />

                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tag.bg} ${tag.text}`}>
                    {isEn ? tag.labelEn : tag.labelDe}
                  </span>
                  <span className="text-sm font-medium text-brand-text-muted">{entry.version}</span>
                  <span className="text-sm text-brand-text-muted">&middot;</span>
                  <time className="text-sm text-brand-text-muted">{entry.date}</time>
                </div>

                <h2 className="mt-3 text-xl font-semibold text-brand-text">
                  {isEn ? entry.titleEn : entry.titleDe}
                </h2>
                <p className="mt-2 leading-relaxed text-brand-text-secondary">
                  {isEn ? entry.descEn : entry.descDe}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
