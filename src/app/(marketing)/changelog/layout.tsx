import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Etchify Changelog — Alle Updates, neue Features und Verbesserungen auf einen Blick.',
  alternates: { canonical: 'https://etchify.app/changelog' },
  openGraph: {
    title: 'Changelog — Etchify',
    description: 'Alle Updates, neue Features und Verbesserungen der Etchify Shopify-App.',
    url: 'https://etchify.app/changelog',
  },
  robots: { index: true, follow: true },
};

export default function ChangelogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
