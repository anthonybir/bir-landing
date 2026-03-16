import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '2px',
        }}
      >
        {/* ABN Grid Mark — 4 charcoal rounded squares */}
        <svg viewBox="0 0 84 84" width="28" height="28">
          <rect fill="#1A1A1A" x="0" y="0" width="38" height="38" rx="3" />
          <rect fill="#1A1A1A" x="42" y="0" width="38" height="38" rx="3" />
          <rect fill="#1A1A1A" x="0" y="42" width="38" height="38" rx="3" />
          <rect fill="#1A1A1A" x="42" y="42" width="38" height="38" rx="3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
