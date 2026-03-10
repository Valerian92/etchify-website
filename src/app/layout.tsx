import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#818cf8',
          colorBackground: '#0f0d1a',
          colorInputBackground: '#1a1726',
          colorInputText: '#ffffff',
        },
      }}
    >
      <html lang="de" className="dark">
        <head>
          {/* Static inline script to prevent theme flash — no user input, safe from XSS */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var m=document.cookie.match(/(?:^|; )theme=([^;]*)/);if(m&&m[1]==='light'){document.documentElement.classList.replace('dark','light')}}catch(e){}})()`,
            }}
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://clerk.etchify.app" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body className={`${inter.className} bg-brand-dark text-brand-text antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
