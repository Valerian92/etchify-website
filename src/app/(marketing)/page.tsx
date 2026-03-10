import dynamic from 'next/dynamic';
import { Hero } from '@/components/landing/Hero';
import { JsonLd } from '@/components/ui/JsonLd';

const Features = dynamic(() => import('@/components/landing/Features').then(m => ({ default: m.Features })));
const HowItWorks = dynamic(() => import('@/components/landing/HowItWorks').then(m => ({ default: m.HowItWorks })));
const PricingTable = dynamic(() => import('@/components/landing/PricingTable').then(m => ({ default: m.PricingTable })));
const FAQ = dynamic(() => import('@/components/landing/FAQ').then(m => ({ default: m.FAQ })));

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
