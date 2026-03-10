import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
