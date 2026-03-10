import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Etchify — betrieben von Valerian Huber / Alpin-Code.',
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
