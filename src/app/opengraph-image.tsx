import { ImageResponse } from 'next/og';

export const alt = 'ABN, Agencia Bir Núñez. Entiende tu organización. Decide con claridad.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#0F3B3E',
          color: '#EFE6D2',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: 0.75,
          }}
        >
          ABN · Agencia Bir Núñez
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Entiende tu organización.
          </div>
          <div
            style={{
              fontSize: 40,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
              marginTop: 20,
              opacity: 0.8,
            }}
          >
            Decide con claridad.
          </div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>
          Sistemas de gestión · IA gobernada · bir.com.py
        </div>
      </div>
    ),
    size,
  );
}
