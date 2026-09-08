import { ImageResponse } from 'next/og';
import BrandMark from './BrandMark';

export const alt = 'Anthony Bir. Dirección, tesorería y sistemas.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', background: '#ffffff', color: '#1b2936', fontFamily: 'sans-serif', padding: 60 }}>
      <BrandMark width={250} height={194} />
      <div style={{ fontSize: 48, letterSpacing: '0.22em', marginTop: 40 }}>ANTHONY BIR</div>
      <div style={{ fontSize: 18, letterSpacing: '0.2em', marginTop: 24 }}>DIRECCIÓN · TESORERÍA · SISTEMAS</div>
      <div style={{ fontSize: 16, color: '#52616e', marginTop: 52 }}>Lambaré, Paraguay · bir.com.py</div>
    </div>,
    size,
  );
}
