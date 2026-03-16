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
          backgroundColor: '#1A1A1A',
          borderRadius: '32px',
        }}
      >
        {/* ABN Grid Mark — warm white on charcoal */}
        <svg viewBox="0 0 84 84" width="100" height="100">
          <rect fill="#F5F3EE" x="0" y="0" width="38" height="38" rx="3" />
          <rect fill="#F5F3EE" x="42" y="0" width="38" height="38" rx="3" />
          <rect fill="#F5F3EE" x="0" y="42" width="38" height="38" rx="3" />
          <rect fill="#F5F3EE" x="42" y="42" width="38" height="38" rx="3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
