// src/app/page.tsx — ABN bone & ink home (one screen, four elements)
//
// Replace the existing src/app/page.tsx with this file.
// Requires the additions in _handoff/globals.absd.additions.css.

import type { Metadata } from 'next';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: 'ABN — Anthony Bir',
  description: 'Estructura donde otros improvisan. Sistemas para instituciones de escala humana.',
};

const proofs = [
  { num: '01', inst: 'AENA', line: 'AULA — planificación inicial-bachillerato, ~300 alumnos.' },
  { num: '02', inst: 'IPUPY', line: 'Tesorería doble-entrada, ~30 iglesias.' },
  { num: '03', inst: 'IBA', line: 'Marco curricular y editorial.' },
] as const;

export default function ABNHome() {
  return (
    <section
      className="absd-section absd-ticks absd-fullbleed"
      style={{
        minHeight: '100dvh',
        padding: '56px 96px',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto auto',
        gap: '0',
      }}
      aria-label="ABN"
    >
      {/* ── Identity strip ─────────────────────── */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span className="caps">anthony bir &nbsp;/&nbsp; ABN</span>
        <span className="caps">№ 001 / 26 · Lambaré, py</span>
      </header>

      {/* ── Hero voice ─────────────────────────── */}
      <div style={{ paddingTop: 80, maxWidth: 720 }}>
        <h1
          className="voice"
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            margin: 0,
          }}
        >
          Estructura donde otros improvisan.
        </h1>
        <span
          className="hl"
          style={{ marginTop: 32, marginBottom: 24 }}
          aria-hidden
        />
        <p
          className="voice"
          style={{
            fontSize: 19,
            lineHeight: 1.35,
            color: 'var(--abir-cream-muted)',
            maxWidth: 460,
            margin: 0,
          }}
        >
          anthony bir es ABN. Una persona, una firma, sistemas para
          instituciones de escala humana.
        </p>
      </div>

      {/* ── Three proofs ───────────────────────── */}
      <div style={{ paddingBottom: 48 }}>
        <div className="caps" style={{ marginBottom: 24 }}>
          Sistemas en producción
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--abir-cream-whisper)',
          }}
        >
          {proofs.map((p, i) => (
            <div
              key={p.num}
              style={{
                paddingTop: 20,
                paddingRight: 32,
                paddingBottom: 0,
                paddingLeft: i > 0 ? 32 : 0,
                borderRight:
                  i < 2 ? '1px solid var(--abir-cream-whisper)' : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <span className="caps" style={{ color: 'var(--abir-cream-muted)' }}>
                  {p.num}
                </span>
                <span
                  className="caps"
                  style={{ color: 'var(--abir-cream)' }}
                >
                  {p.inst}
                </span>
              </div>
              <div
                className="voice"
                style={{ fontSize: 19, lineHeight: 1.3 }}
              >
                {p.line}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA — single decision (stacked) ────── */}
      <footer
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 64,
          alignItems: 'start',
          borderTop: '1px solid var(--abir-cream-whisper)',
          paddingTop: 20,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span className="caps">Diagnóstico</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absd-link"
            style={{ fontSize: 24, alignSelf: 'flex-start' }}
          >
            Coordinar por WhatsApp
          </a>
          <span
            className="voice"
            style={{
              fontSize: 14,
              color: 'var(--abir-cream-muted)',
              marginTop: 2,
            }}
          >
            respuesta habitual en 48h hábiles.
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            textAlign: 'right',
          }}
        >
          <span className="caps">O escribime</span>
          <a
            href="mailto:anthony@bir.com.py"
            className="voice"
            style={{
              fontSize: 19,
              color: 'var(--abir-cream)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            anthony@bir.com.py
          </a>
        </div>
      </footer>
    </section>
  );
}
