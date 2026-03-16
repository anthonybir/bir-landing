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
          backgroundColor: '#1A1A1A',
          padding: '80px',
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* ABN Frame Mark inline */}
          <div
            style={{
              width: '60px',
              height: '60px',
              border: '2.5px solid #F5F3EE',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '4px',
              color: '#F5F3EE',
              fontFamily: 'Helvetica, Arial, sans-serif',
              position: 'relative',
            }}
          >
            ABN
          </div>
          <span
            style={{
              fontSize: '28px',
              color: '#F5F3EE',
              letterSpacing: '0.1em',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            AGENCIA BIR NUÑEZ
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '64px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 700,
            color: '#F5F3EE',
            lineHeight: 1.2,
            marginBottom: '30px',
            maxWidth: '900px',
          }}
        >
          Estructura donde otros improvisan
        </div>

        {/* Accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#C7A54A',
            marginBottom: '30px',
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#F5F3EE',
            opacity: 0.7,
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          Consultoría en Transformación Institucional • Paraguay
        </div>
      </div>
    ),
    { ...size }
  );
}
