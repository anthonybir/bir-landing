import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ABN - Consultoría en Transformación Institucional';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#1a3a2f',
          padding: '80px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#FAF8F5',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontFamily: 'Georgia',
              color: '#1a3a2f',
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: '28px',
              color: '#FAF8F5',
              letterSpacing: '0.1em',
            }}
          >
            AGENCIA BIR NUÑEZ
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '64px',
            fontFamily: 'Georgia',
            color: '#FAF8F5',
            lineHeight: 1.2,
            marginBottom: '30px',
            maxWidth: '900px',
          }}
        >
          Estructura honesta para organizaciones que perduran
        </div>

        {/* Accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#b87333',
            marginBottom: '30px',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#FAF8F5',
            opacity: 0.7,
          }}
        >
          Consultoría en Transformación Institucional • Paraguay
        </div>
      </div>
    ),
    { ...size }
  );
}
