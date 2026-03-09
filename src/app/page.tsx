import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { PricingTable } from '@/components/landing/PricingTable';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PricingTable />
    </>
  );
}
