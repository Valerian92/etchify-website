import type { Metadata } from 'next';
import { PricingTable } from '@/components/landing/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Etchify Preise — von Free bis Business. Starte kostenlos, upgrade wenn du wachsen willst.',
  alternates: { canonical: 'https://etchify.app/pricing' },
  openGraph: {
    title: 'Etchify Pricing — Von Free bis Business',
    description: 'Starte kostenlos mit 1 Produkt. Upgrade auf Starter, Professional oder Business.',
    url: 'https://etchify.app/pricing',
  },
};

export default function PricingPage() {
  return <PricingTable />;
}
