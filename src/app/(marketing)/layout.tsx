'use client';

import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { LocaleProvider } from '@/lib/LocaleProvider';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
