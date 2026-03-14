import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Etchify — Gravur & Print Konfigurator für Shopify';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  const imgData = await readFile(join(process.cwd(), 'public/screenshots/configurator-full.png'));
  const imgBase64 = `data:image/png;base64,${imgData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f0d1a 0%, #1a1726 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Screenshot as background */}
        <img
          src={imgBase64}
          width={1200}
          height={630}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.35,
          }}
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '70%',
            background: 'linear-gradient(to top, #0f0d1a 30%, transparent)',
            display: 'flex',
          }}
        />
        {/* Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 64,
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
              color: '#b4bcc8',
              marginTop: 8,
            }}
          >
            Gravur & Print Konfigurator für Shopify
          </div>
          <div
            style={{
              display: 'flex',
              gap: 24,
              marginTop: 24,
              fontSize: 16,
              color: '#818cf8',
            }}
          >
            <span>Canvas Editor</span>
            <span style={{ color: '#6b7280' }}>·</span>
            <span>Produktionsdateien</span>
            <span style={{ color: '#6b7280' }}>·</span>
            <span>No-Code Setup</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
