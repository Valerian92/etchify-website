import dynamic from 'next/dynamic';
import { Hero } from '@/components/landing/Hero';
import { JsonLd } from '@/components/ui/JsonLd';

const Features = dynamic(() => import('@/components/landing/Features').then(m => ({ default: m.Features })));
const Showcase = dynamic(() => import('@/components/landing/Showcase').then(m => ({ default: m.Showcase })));
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
  screenshot: 'https://etchify.app/screenshots/configurator-full.png',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Etchify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Etchify ist eine Shopify-App, mit der deine Kunden Produkte direkt im Shop personalisieren können — Gravuren, Drucke, Texte, Bilder und mehr. Du erhältst produktionsfertige Dateien und kannst sofort loslegen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie schnell kann ich Etchify einrichten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In unter 5 Minuten. Unser 7-Step Wizard führt dich durch die Einrichtung — Produkte auswählen, Materialien zuweisen, Tools aktivieren. Kein Code nötig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Shopify-Pläne werden unterstützt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Etchify funktioniert mit allen Shopify-Plänen — Basic, Shopify, Advanced und Plus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Fertigungsverfahren werden unterstützt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laser-Gravur, UV-Druck, Sublimation und mehr. Etchify generiert produktionsfertige Dateien in SVG, PNG und PDF — passend für deine Maschinen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es einen kostenlosen Plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Der Free Plan enthält den Canvas Editor, Text & Formen, SVG Export und Community Support — für 1 Produkt. Keine Kreditkarte nötig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich den Konfigurator an mein Shop-Design anpassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Etchify passt sich automatisch an dein Shopify-Theme an. Im Business-Plan kannst du zusätzlich Custom Branding nutzen, um den Konfigurator vollständig an deine Marke anzupassen.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <JsonLd data={faqSchema} />
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <PricingTable />
      <FAQ />
    </>
  );
}
