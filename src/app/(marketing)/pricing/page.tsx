import type { Metadata } from 'next';
import { PricingTable } from '@/components/landing/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Etchify Preise — von Free bis Business. Starte kostenlos mit 1 Produkt, upgrade wenn du wachsen willst.',
  keywords: ['Etchify Pricing', 'Shopify App Preise', 'Gravur App kostenlos', 'Print Konfigurator Preise'],
  alternates: { canonical: 'https://etchify.app/pricing' },
  openGraph: {
    title: 'Etchify Pricing — Von Free bis Business',
    description: 'Starte kostenlos mit 1 Produkt. Upgrade auf Starter ($19), Professional ($49) oder Business ($99).',
    url: 'https://etchify.app/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etchify Pricing — Von Free bis Business',
    description: 'Starte kostenlos mit 1 Produkt. Upgrade auf Starter, Professional oder Business.',
  },
};

export default function PricingPage() {
  return <PricingTable />;
}
