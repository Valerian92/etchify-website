import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Etchify — Gravur & Print Konfigurator für Shopify';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0d1a 0%, #1a1726 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            display: 'flex',
          }}
        >
          <span style={{ color: '#818cf8' }}>Etch</span>
          <span>ify</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#9ca3af',
            marginTop: 16,
          }}
        >
          Gravur & Print Konfigurator für Shopify
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 48,
            fontSize: 18,
            color: '#818cf8',
          }}
        >
          <span>Canvas Editor</span>
          <span>·</span>
          <span>Produktionsdateien</span>
          <span>·</span>
          <span>No-Code Setup</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
