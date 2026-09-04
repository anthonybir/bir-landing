import { ImageResponse } from 'next/og';

export const alt = 'ABN · Paraguay residency, handled in English.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function EnglishOpengraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#0F3B3E', color: '#EFE6D2', fontFamily: 'sans-serif' }}>
      <div style={{ fontSize: 28, letterSpacing: '0.2em' }}>ABN · AGENCIA BIR NÚÑEZ</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 68, lineHeight: 1.1 }}><span>Paraguay residency,</span><span>handled in English.</span></div>
      <div style={{ fontSize: 28 }}>Relocation services · Lambaré, Paraguay · bir.com.py/en</div>
    </div>, size,
  );
}
