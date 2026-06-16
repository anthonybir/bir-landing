import { ImageResponse } from 'next/og';

export const alt = 'ABN, Agencia Bir Núñez. Estructura donde otros improvisan.';
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
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Estructura donde otros improvisan.
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>bir.com.py</div>
      </div>
    ),
    size,
  );
}
