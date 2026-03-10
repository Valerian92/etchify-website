'use client';

import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { LocaleProvider } from '@/lib/LocaleProvider';
import { ThemeProvider } from '@/lib/ThemeProvider';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <a href="#main-content" className="skip-to-content">
          Zum Inhalt springen
        </a>
        <Nav />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
      </LocaleProvider>
    </ThemeProvider>
  );
}
