import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Etchify — betrieben von Valerian Huber / Alpin-Code, Großkarolinenfeld.',
  alternates: { canonical: 'https://etchify.app/legal' },
  openGraph: {
    title: 'Impressum — Etchify',
    description: 'Anbieterkennzeichnung gemäß § 5 TMG. Valerian Huber, Alpin-Code.',
    url: 'https://etchify.app/legal',
  },
  robots: { index: true, follow: true },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
