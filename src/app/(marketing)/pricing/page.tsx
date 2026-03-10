import type { Metadata } from 'next';
import { PricingTable } from '@/components/landing/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Etchify Preise — von Free bis Business. Starte kostenlos, upgrade wenn du wachsen willst.',
};

export default function PricingPage() {
  return <PricingTable />;
}
