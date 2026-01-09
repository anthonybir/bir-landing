import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a3a2f',
          borderRadius: '32px',
        }}
      >
        <span
          style={{
            fontSize: '100px',
            fontFamily: 'Georgia',
            color: '#FAF8F5',
          }}
        >
          A
        </span>
      </div>
    ),
    { ...size }
  );
}
