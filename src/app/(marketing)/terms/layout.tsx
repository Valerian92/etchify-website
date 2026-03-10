import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB von Etchify — Allgemeine Geschäftsbedingungen für die Nutzung der Shopify Gravur & Print App.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
