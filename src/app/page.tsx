// src/app/page.tsx — ABN bone & ink home (one screen, four elements)
//
// Replace the existing src/app/page.tsx with this file.
// Requires the additions in _handoff/globals.absd.additions.css.

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: 'ABN — Anthony Bir',
  description: 'Estructura donde otros improvisan. Sistemas para instituciones de escala humana.',
};

export const revalidate = 3600;

const MONTHS_ES = [
  'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
  'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC',
] as const;

function todayInAsuncion(): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Asuncion',
    day: '2-digit',
    month: 'numeric',
    year: 'numeric',
  }).formatToParts(new Date());
  const day = parts.find((p) => p.type === 'day')?.value ?? '';
  const monthNum = Number(parts.find((p) => p.type === 'month')?.value ?? '1');
  const year = parts.find((p) => p.type === 'year')?.value ?? '';
  return `${day} ${MONTHS_ES[monthNum - 1]} ${year}`;
}

const proofs = [
  { num: '01', inst: 'AENA', line: 'Planificación inicial-bachillerato, ~300 alumnos.' },
  { num: '02', inst: 'IPUPY', line: 'Tesorería doble-entrada, ~30 iglesias.' },
  { num: '03', inst: 'IBA', line: 'Marco curricular y editorial.' },
] as const;

export default function ABNHome() {
  const today = todayInAsuncion();

  return (
    <section
      className="absd-section absd-ticks absd-fullbleed absd-page-pad"
      style={{
        minHeight: '100dvh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto auto',
        gap: '0',
      }}
      aria-label="ABN"
    >
      {/* ── Identity strip ─────────────────────── */}
      <header className="absd-frame">
        <span className="caps">
          <Link href="/nosotros">anthony bir</Link>
          &nbsp;/&nbsp; ABN
        </span>
        <span className="caps">{today} &nbsp;·&nbsp; Lambaré, py</span>
      </header>

      {/* ── Hero voice + institutional artifact ── */}
      <div className="absd-hero-lockup">
        <div>
          <h1
            className="voice"
            style={{
              fontSize: 'clamp(36px, 7vw, 72px)',
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
              fontSize: 'clamp(17px, 4.5vw, 19px)',
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

        <aside className="absd-artifact" aria-label="Evidencia institucional">
          <div className="absd-artifact-head">
            <Image
              src="/logos/abn-mark-white.svg"
              alt=""
              width={48}
              height={41}
              aria-hidden
            />
            <span className="caps">registro operativo</span>
          </div>
          <dl className="absd-ledger">
            <div>
              <dt className="caps">Morosidad AENA</dt>
              <dd className="voice">
                70% <span className="absd-signal">→</span> 2.9%
              </dd>
            </div>
            <div>
              <dt className="caps">Alcance vivo</dt>
              <dd className="voice">colegio, iglesia, seminario</dd>
            </div>
            <div>
              <dt className="caps">Criterio</dt>
              <dd className="voice">primero adentro</dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* ── Three proofs ───────────────────────── */}
      <div style={{ paddingBottom: 'clamp(32px, 6vw, 48px)' }}>
        <div className="caps" style={{ marginBottom: 24 }}>
          Sistemas en producción
        </div>
        <div className="absd-proofs">
          {proofs.map((p) => (
            <div key={p.num}>
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
                style={{ fontSize: 'clamp(17px, 4.5vw, 19px)', lineHeight: 1.3 }}
              >
                {p.line}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA — single decision (stacked) ────── */}
      <footer className="absd-cta-row">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absd-contact absd-contact--primary"
        >
          <span className="caps">Diagnóstico</span>
          <strong>Coordinar por WhatsApp</strong>
          <span>Respuesta habitual en 48h hábiles.</span>
        </a>
        <div className="absd-cta-secondary">
          <a
            href="mailto:anthony@bir.com.py"
            className="absd-contact absd-contact--secondary"
          >
            <span className="caps">O escribime</span>
            <strong>anthony@bir.com.py</strong>
            <span>Para conversaciones con más contexto.</span>
          </a>
          <Link href="/nosotros" className="caps">
            sobre anthony →
          </Link>
        </div>
      </footer>
    </section>
  );
}
