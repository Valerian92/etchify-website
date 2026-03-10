import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Etchify — Gravur & Print Konfigurator',
    short_name: 'Etchify',
    description: 'Shopify-App für Gravur & Print Shops. Kunden gestalten Designs im Browser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0d1a',
    theme_color: '#818cf8',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
