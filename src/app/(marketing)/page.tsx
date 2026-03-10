import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { PricingTable } from '@/components/landing/PricingTable';
import { FAQ } from '@/components/landing/FAQ';
import { JsonLd } from '@/components/ui/JsonLd';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Etchify',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://etchify.app',
  description:
    'Shopify-App für Gravur & Print Shops. Kunden gestalten Designs im Browser — du produzierst.',
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
    { '@type': 'Offer', price: '19', priceCurrency: 'USD', name: 'Starter' },
    { '@type': 'Offer', price: '49', priceCurrency: 'USD', name: 'Professional' },
    { '@type': 'Offer', price: '99', priceCurrency: 'USD', name: 'Business' },
  ],
  author: {
    '@type': 'Organization',
    name: 'Alpin-Code',
    url: 'https://alpin-code.de',
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <Features />
      <HowItWorks />
      <PricingTable />
      <FAQ />
    </>
  );
}
