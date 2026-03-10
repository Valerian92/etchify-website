import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Etchify — wie wir deine Daten schützen, verarbeiten und welche Rechte du hast. DSGVO-konform.',
  alternates: { canonical: 'https://etchify.app/privacy' },
  openGraph: {
    title: 'Datenschutzerklärung — Etchify',
    description: 'Erfahre wie Etchify deine Daten schützt. DSGVO-konform, EU-Server, transparente Verarbeitung.',
    url: 'https://etchify.app/privacy',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
