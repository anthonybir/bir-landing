// src/app/nosotros/page.tsx — ABN /nosotros (the person behind the firm)
//
// Replace the existing src/app/nosotros/page.tsx with this file.
// Requires:
//   - the additions in _handoff/globals.absd.additions.css
//   - the photo at public/anthony.jpeg (copy from _handoff/public_anthony.jpeg)

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nosotros · ABN — Anthony Bir',
  description:
    'Anthony Bir es ABN. Una persona, una firma, una vida real detrás.',
};

const operative = [
  'El criterio de la institución antes que la herramienta.',
  'Sistemas que sobreviven mi ausencia.',
  'Una conversación, no una propuesta.',
] as const;

export default function NosotrosPage() {
  return (
    <section
      className="absd-section absd-fullbleed"
      style={{
        minHeight: '100dvh',
        position: 'relative',
        padding: '56px 0 96px',
      }}
      aria-label="Sobre Anthony Bir"
    >
      {/* Top frame */}
      <header
        style={{
          padding: '0 96px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 80,
        }}
      >
        <span className="caps">
          <a href="/">anthony bir</a>
          &nbsp;/&nbsp; ABN &nbsp;/&nbsp; nosotros
        </span>
        <a href="/" className="caps" style={{ textDecoration: 'none' }}>
          ← Volver a la portada
        </a>
      </header>

      {/* Two-column body — photo anchored to left edge, text right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
          gap: 96,
          alignItems: 'start',
        }}
      >
        {/* Photo — container matches photo's 3:4 aspect, fills column edge-to-edge */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '3 / 4' }}>
          <Image
            src="/anthony.jpeg"
            alt="Anthony Bir y Diana en Asunción, 2026"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Text */}
        <div style={{ paddingRight: 96, paddingTop: 16 }}>
          <h1
            className="voice"
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              margin: 0,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            Una persona, una firma.
          </h1>
          <span className="hl" style={{ marginBottom: 32 }} aria-hidden />
          <p
            className="voice"
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: 'var(--abir-cream-muted)',
              maxWidth: 480,
              margin: 0,
              marginBottom: 56,
              textWrap: 'pretty',
            }}
          >
            Anthony pasa los días resolviendo problemas difíciles de IA y las
            noches recorriendo la creciente escena gastronómica de Asunción
            con su esposa Diana. Pastorea una congregación pequeña en Lambaré,
            cría a cuatro hijos increíbles y, junto a Diana, dirige{' '}
            <span style={{ color: 'var(--abir-cream)' }}>AENA</span> — el
            proyecto educativo comunitario de la familia.
          </p>

          <span
            className="hl hl--whisper"
            style={{ marginBottom: 32 }}
            aria-hidden
          />
          <p
            className="voice"
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              color: 'var(--abir-cream-muted)',
              maxWidth: 480,
              margin: 0,
              marginBottom: 56,
              textWrap: 'pretty',
            }}
          >
            Veinte años corporativos en{' '}
            <span style={{ color: 'var(--abir-cream)' }}>Heinz</span> y{' '}
            <span style={{ color: 'var(--abir-cream)' }}>Thermo Fisher</span>{' '}
            antes de volver a Paraguay. Hoy, los sistemas que ABN ofrece viven
            primero en mis propias instituciones — AENA, IPUPY, IBA — antes de
            llegar a un cliente. Todos sostenidos por una persona. Todos vivos.
          </p>

          <div className="caps" style={{ marginBottom: 16 }}>
            Cómo trabajo
          </div>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              maxWidth: 480,
              borderTop: '1px solid var(--abir-cream-whisper)',
            }}
          >
            {operative.map((line, i) => (
              <li
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--abir-cream-whisper)',
                }}
              >
                <span className="caps" style={{ color: 'var(--abir-cream-muted)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="voice"
                  style={{ fontSize: 18, lineHeight: 1.4 }}
                >
                  {line}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
