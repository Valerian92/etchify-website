import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Etchify — Gravur & Print Konfigurator für Shopify',
    template: '%s | Etchify',
  },
  description:
    'Shopify-App für Gravur & Print Shops. Kunden gestalten Designs im Browser — du produzierst. Canvas Editor, QR-Codes, Produktionsdateien.',
  keywords: [
    'Shopify App',
    'Gravur Konfigurator',
    'Laser Gravur',
    'Print on Demand',
    'Produktdesigner',
    'Etchify',
  ],
  authors: [{ name: 'Alpin-Code', url: 'https://alpin-code.de' }],
  creator: 'Alpin-Code',
  metadataBase: new URL('https://etchify.app'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://etchify.app',
    siteName: 'Etchify',
    title: 'Etchify — Gravur & Print Konfigurator für Shopify',
    description:
      'Shopify-App für Gravur & Print Shops. Kunden gestalten — du produzierst.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etchify — Gravur & Print Konfigurator für Shopify',
    description: 'Shopify-App für Gravur & Print Shops.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} bg-brand-dark text-white antialiased`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
