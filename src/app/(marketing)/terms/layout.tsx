import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB von Etchify — Allgemeine Geschäftsbedingungen für die Nutzung der Shopify Gravur & Print App.',
  alternates: { canonical: 'https://etchify.app/terms' },
  openGraph: {
    title: 'AGB — Etchify',
    description: 'Allgemeine Geschäftsbedingungen für die Nutzung der Etchify Shopify-App.',
    url: 'https://etchify.app/terms',
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
