import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
