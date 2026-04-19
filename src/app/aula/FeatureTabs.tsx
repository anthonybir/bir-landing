'use client';

import { useState } from 'react';

type Feature = {
  t: string;
  d: string;
  code: [string, string, string, string];
};

const features: ReadonlyArray<Feature> = [
  {
    t: 'Marco pedagógico como contexto',
    d: 'La institución define sus principios no negociables, su filosofía y su estructura de clase. AULA los usa como restricción — no como sugerencia — al generar planificación y materiales.',
    code: [
      'institucion.definirMarco()',
      '→ aula.validar(marco)',
      '→ aula.generar(unidad)',
      '→ aula.auditar(resultado)',
    ],
  },
  {
    t: 'Pack curricular gobernado',
    d: 'Contenidos, capacidades y estándares por grado viven dentro de AULA. Cada recurso generado pasa por el filtro curricular antes de publicarse.',
    code: [
      'curriculum.cargar(grado)',
      '→ aula.alinear(capacidades)',
      '→ aula.producir(material)',
      '→ aula.validar(estándar)',
    ],
  },
  {
    t: 'Evaluación con rúbricas propias',
    d: 'Las rúbricas y políticas de revisión de la institución se codifican una vez. AULA las reutiliza al generar evaluaciones, corregir y retroalimentar.',
    code: [
      'rubricas.registrar(nivel)',
      '→ aula.corregir(entrega)',
      '→ aula.retroalimentar()',
      '→ aula.reportar()',
    ],
  },
  {
    t: 'Lenguaje e identidad institucional',
    d: 'Tono, terminología y cultura local se mantienen consistentes en toda salida. Lo que dice AULA suena a la institución, no a una herramienta genérica.',
    code: [
      'identidad.tono("formal-es-PY")',
      '→ aula.escribir(material)',
      '→ aula.revisar(estilo)',
      '→ aula.entregar()',
    ],
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const f = features[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % features.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + features.length) % features.length);
    }
  };

  return (
    <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
      <div role="tablist" aria-label="Qué hay dentro de AULA" aria-orientation="vertical">
        {features.map((item, i) => {
          const isActive = active === i;
          return (
            <button
              key={item.t}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`feature-panel-${i}`}
              id={`feature-tab-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className="grid w-full cursor-pointer items-baseline gap-6 text-left transition-opacity duration-200"
              style={{
                gridTemplateColumns: '48px 1fr 20px',
                padding: '24px 0',
                borderTop: i === 0 ? '2px solid var(--foreground)' : '1px solid hsl(20 12% 10% / 0.1)',
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <span
                className="font-mono text-xs tracking-[0.08em]"
                style={{ color: 'var(--accent-dark)' }}
              >
                0{i + 1}
              </span>
              <div>
                <div className="editorial-display text-xl md:text-2xl">{item.t}</div>
                {isActive && (
                  <p
                    className="mt-3 max-w-lg text-[0.95rem] text-foreground/72"
                    style={{ animation: 'fadeInUp 280ms var(--ease-settle)' }}
                  >
                    {item.d}
                  </p>
                )}
              </div>
              <span
                className="text-base text-foreground/50 transition-transform duration-300"
                style={{ transform: isActive ? 'rotate(45deg)' : 'none' }}
              >
                +
              </span>
            </button>
          );
        })}
        <div style={{ borderTop: '1px solid hsl(20 12% 10% / 0.1)' }} />
      </div>

      <div className="md:sticky md:top-24">
        <div
          role="tabpanel"
          id={`feature-panel-${active}`}
          aria-labelledby={`feature-tab-${active}`}
          className="relative overflow-hidden rounded-2xl p-8 md:p-10"
          style={{
            background: 'linear-gradient(180deg, var(--gray-800) 0%, var(--gray-900) 100%)',
            color: 'var(--gray-50)',
            minHeight: 420,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(600px 200px at 100% 0%, hsl(39 80% 55% / 0.18), transparent 70%)',
            }}
          />
          <div className="relative" key={active}>
            <span className="eyebrow eyebrow--on-dark">
              <span className="dot" />
              Feature {String(active + 1).padStart(2, '0')}
            </span>
            <h3
              className="editorial-display mt-5 mb-5 max-w-md text-3xl md:text-4xl"
              style={{ color: 'var(--gray-50)' }}
            >
              {f.t}
            </h3>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-background/78">{f.d}</p>
            <div
              className="mt-10 rounded-xl border p-5 font-mono text-xs leading-loose"
              style={{
                background: 'hsl(0 0% 100% / 0.04)',
                borderColor: 'hsl(0 0% 100% / 0.12)',
                color: 'hsl(0 0% 100% / 0.78)',
              }}
            >
              {f.code.map((line, i) => (
                <div key={line} style={{ color: i === 0 ? 'var(--signal)' : undefined }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
