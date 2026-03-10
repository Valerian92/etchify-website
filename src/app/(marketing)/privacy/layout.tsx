import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Etchify — wie wir deine Daten schützen und verarbeiten.',
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
