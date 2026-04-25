'use client';

import Image from 'next/image';
import { useState } from 'react';

type Case = {
  c: string;
  t: string;
  sector: string;
  frame: string;
  since: string;
  scope: readonly string[];
  result: readonly string[];
  image: { src: string; w: number; h: number; alt: string };
  kpis: ReadonlyArray<{ l: string; v: string }>;
};

const cases: ReadonlyArray<Case> = [
  {
    c: 'AENA',
    t: 'Gestión escolar y AULA en producción',
    sector: 'Educación escolar K-12',
    frame: 'Plataforma + operación',
    since: '2023',
    scope: [
      'Sistema académico completo',
      'Tesorería multi-sede',
      'Editorial curricular',
      'Comunicación con familias',
    ],
    result: [
      'Morosidad institucional 70% → 2.9% en tres años',
      'Planificación digital diaria, libreta y portal autónomos',
      'Reportes MEC sistematizados',
      'AULA integrado al flujo docente',
    ],
    image: {
      src: '/screenshots/aena-dashboard.png',
      w: 2842,
      h: 1794,
      alt: 'AENA Admin dashboard',
    },
    kpis: [
      { l: 'Morosidad', v: '70% → 2.9%' },
      { l: 'Estudiantes', v: '≈ 300' },
      { l: 'Modelo', v: 'MEAA 3.0' },
    ],
  },
  {
    c: 'IBA',
    t: 'ERP académico + expansión regional',
    sector: 'Seminario teológico',
    frame: 'Seminario + editorial',
    since: '2026',
    scope: [
      'ERP académico para operación teológica',
      'AULA en implementación curricular',
      'Red multipaís bajo un estándar',
      'Sílabos, asistencia y cumplimiento',
    ],
    result: [
      'Enseñanza pastoral artesanal → material y alcance asistido por IA',
      'Red multipaís: Paraguay, Brasil, Argentina, Ecuador',
      'Un solo estándar editorial bajo la red IBA',
      'Aprobación editorial acortada',
    ],
    image: {
      src: '/screenshots/editorial-aena.png',
      w: 2814,
      h: 1808,
      alt: 'IBA editorial planning surface',
    },
    kpis: [
      { l: 'Países', v: '4' },
      { l: 'Estado', v: 'En rollout' },
      { l: 'Modelo', v: 'Red IBA' },
    ],
  },
  {
    c: 'IPUPY',
    t: 'Tesorería multi-sede con gobernanza clara',
    sector: 'Denominación religiosa',
    frame: 'Finanzas institucionales',
    since: '2024',
    scope: [
      'Consolidación de tesorería',
      'Reglas de gobernanza por sede',
      'Dashboard de flujo consolidado',
      'Audit trail regulatorio',
    ],
    result: [
      'Tesorería fragmentada → contabilidad institucional auditable',
      'Cierre mensual: 3 semanas → 1 día',
      '22 sedes integradas, trazabilidad 100% digital',
      'Cierre trimestral auditable',
    ],
    image: {
      src: '/screenshots/ipupy-dashboard.png',
      w: 2846,
      h: 1822,
      alt: 'IPUPY Tesorería dashboard',
    },
    kpis: [
      { l: 'En producción', v: '2 años' },
      { l: 'Sedes', v: '22' },
      { l: 'Cierre', v: '1 día' },
    ],
  },
];

export default function CaseSelector() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((i + 1) % cases.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((i - 1 + cases.length) % cases.length);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Selector de casos en producción"
        className="grid border-b border-[hsl(20_12%_10%/0.1)] md:grid-cols-3"
        style={{ borderTop: '2px solid var(--foreground)' }}
      >
        {cases.map((cs, i) => {
          const isActive = active === i;
          return (
            <button
              key={cs.c}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`case-panel-${i}`}
              id={`case-tab-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className="cursor-pointer p-6 text-left transition md:p-8"
              style={{
                background: isActive ? 'var(--foreground)' : 'transparent',
                color: isActive ? 'var(--background)' : 'var(--foreground)',
                borderRight: i < 2 ? '1px solid hsl(20 12% 10% / 0.1)' : undefined,
              }}
            >
              <div
                className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em]"
                style={{ color: isActive ? 'var(--signal)' : 'var(--accent-dark)' }}
              >
                Caso 0{i + 1}
              </div>
              <div
                className="editorial-display text-3xl md:text-[2.5rem]"
                style={{ color: isActive ? 'var(--background)' : 'var(--foreground)' }}
              >
                {cs.c}
              </div>
              <div
                className="mt-2 text-sm"
                style={{ color: isActive ? 'rgba(251,250,249,0.72)' : 'var(--gray-500)' }}
              >
                {cs.sector}
              </div>
            </button>
          );
        })}
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`case-panel-${active}`}
        aria-labelledby={`case-tab-${active}`}
        className="grid gap-12 pt-16 md:grid-cols-2 md:gap-16"
        style={{ animation: 'fadeInUp 280ms var(--ease-settle)' }}
      >
        <div>
          <span className="pill">
            <span className="dot" />
            {c.frame} · Desde {c.since}
          </span>
          <h2 className="editorial-display mt-6 mb-8 text-[clamp(2.25rem,4.5vw,4rem)]">{c.t}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent-dark)]">
                Alcance
              </div>
              <ul className="m-0 list-none p-0">
                {c.scope.map((s, i) => (
                  <li
                    key={s}
                    className="py-2 text-sm text-foreground/72"
                    style={{
                      borderTop:
                        i === 0
                          ? '1px solid hsl(20 12% 10% / 0.1)'
                          : '1px solid hsl(20 12% 10% / 0.06)',
                    }}
                  >
                    — {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent-dark)]">
                Resultado
              </div>
              <ul className="m-0 list-none p-0">
                {c.result.map((s, i) => (
                  <li
                    key={s}
                    className="py-2 text-sm text-foreground/72"
                    style={{
                      borderTop:
                        i === 0
                          ? '1px solid hsl(20 12% 10% / 0.1)'
                          : '1px solid hsl(20 12% 10% / 0.06)',
                    }}
                  >
                    → {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="editorial-media bg-white">
            <div className="browser-chrome">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <Image
              src={c.image.src}
              alt={c.image.alt}
              width={c.image.w}
              height={c.image.h}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
          <div className="mt-6 grid overflow-hidden rounded-xl border border-[hsl(20_12%_10%/0.1)] bg-white md:grid-cols-3">
            {c.kpis.map((k, i) => (
              <div
                key={k.l}
                className="p-5"
                style={{
                  borderRight: i < 2 ? '1px solid hsl(20 12% 10% / 0.08)' : undefined,
                }}
              >
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-foreground/55">
                  {k.l}
                </div>
                <div className="editorial-display mt-2 text-2xl md:text-[1.75rem]">{k.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
