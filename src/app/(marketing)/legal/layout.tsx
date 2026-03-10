import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Etchify — betrieben von Valerian Huber / Alpin-Code.',
  alternates: { canonical: 'https://etchify.app/legal' },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
