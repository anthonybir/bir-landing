import type { Metadata } from 'next';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Servicios | ABN — Agencia Bir Nuñez',
  description:
    'Plataforma AULA: motor de IA con contexto institucional. Consultoría en transformación para colegios, seminarios e instituciones en Latinoamérica.',
};

const modes = [
  {
    k: '01',
    t: 'Diagnóstico institucional',
    sub: 'Cuando el problema todavía no está bien definido',
    p: '2–4 semanas',
    d: 'Auditamos operación, criterio y puntos de fricción para establecer qué necesita orden, qué necesita sistema y qué conviene dejar para después.',
    bullets: [
      'Diagnóstico operativo y pedagógico',
      'Priorización de riesgos y cuellos de botella',
      'Hoja de ruta inicial y responsables',
    ],
  },
  {
    k: '02',
    t: 'Implementación por frente',
    sub: 'Cuando ya hay una prioridad clara',
    p: '3–6 meses',
    d: 'Entramos sobre un frente concreto, con alcance definido, entregables claros y una lógica de implementación que no rompa la operación diaria.',
    bullets: [
      'Proyecto por área o por problema',
      'Sistema, criterio y capacitación en el mismo frente',
      'Ejecución escalonada con responsables visibles',
    ],
  },
  {
    k: '03',
    t: 'Acompañamiento integral',
    sub: 'Cuando varias áreas necesitan avanzar juntas',
    p: 'Continuo',
    d: 'Coordinamos educación, tecnología y desarrollo institucional bajo una misma dirección para evitar proveedores sueltos y decisiones contradictorias.',
    bullets: [
      'Dirección transversal del proyecto',
      'Ajuste continuo según operación real',
      'Un solo equipo responsable del avance',
    ],
  },
] as const;

const context = [
  {
    t: 'Marco pedagógico',
    d: 'Filosofía, límites, estructura de clase y criterios no negociables.',
  },
  {
    t: 'Pack curricular',
    d: 'Contenidos, capacidades, estándares de grado y adaptación local.',
  },
  {
    t: 'Operación docente',
    d: 'Entregables, revisión, comunicación y uso real dentro del equipo.',
  },
] as const;

const notForUs = [
  'Instituciones que quieren sólo una licencia de software, sin conversar del criterio detrás.',
  'Organizaciones que buscan que la agencia decida qué enseñar, cómo gobernar y qué priorizar.',
  'Proyectos que esperan una integración "llave en mano" sin involucrar a la dirección.',
] as const;

export default function ServiciosPage() {
  return (
    <>
      {/* ── Editorial hero ───────────────────────── */}
      <section className="px-6 pt-10 pb-6 md:px-12 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 grid items-start gap-8 md:grid-cols-[80px_1fr]">
            <span className="issue-marker">SERVICES</span>
            <span className="eyebrow">
              <span className="dot" />
              Cómo trabajamos
            </span>
          </div>

          <h1 className="editorial-display my-4 text-[clamp(2.5rem,11vw,10.75rem)] md:my-8">
            Diagnóstico,
            <br />
            implementación,
            <br />
            <span className="serif-it">acompañamiento.</span>
          </h1>

          <div className="rule-ink grid items-start gap-10 pt-8 md:grid-cols-2">
            <p className="max-w-[32rem] font-display text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
              Tres modos que funcionan como un solo sistema.{' '}
              <span className="serif-it">Sin fragmentar</span> criterio ni ejecución.
            </p>
            <p className="max-w-[30rem] text-[0.95rem] text-foreground/72">
              ABN no reparte responsabilidades entre integradores, consultores y &ldquo;el que
              maneja el Excel&rdquo;. Entramos completos, salimos completos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services magazine grid ───────────────── */}
      <section aria-label="Modos de trabajo" className="mt-16 px-6 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          {modes.map((s, i) => (
            <div
              key={s.k}
              className="grid items-start gap-8 py-10 md:grid-cols-[80px_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] md:gap-12 md:py-12"
              style={{
                borderTop: i === 0 ? '2px solid var(--foreground)' : '1px solid hsl(20 12% 10% / 0.1)',
              }}
            >
              <span
                className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
                style={{ color: 'var(--accent-dark)' }}
              >
                {s.k}
              </span>
              <div>
                <h3 className="editorial-display mb-4 text-3xl md:text-[2.25rem]">{s.t}</h3>
                <p className="mb-4 text-sm font-medium text-foreground/72">{s.sub}</p>
                <span className="pill">
                  <span className="dot" />
                  {s.p}
                </span>
              </div>
              <p className="text-[0.95rem] leading-relaxed text-foreground/72">{s.d}</p>
              <ul className="m-0 list-none p-0">
                {s.bullets.map((b, j) => (
                  <li
                    key={b}
                    className="flex gap-2 py-1.5 text-[0.85rem] text-foreground/66"
                    style={{
                      borderTop:
                        j === 0
                          ? '1px solid hsl(20 12% 10% / 0.1)'
                          : '1px solid hsl(20 12% 10% / 0.06)',
                      paddingTop: '0.5rem',
                      paddingBottom: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--accent-dark)' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div style={{ borderTop: '1px solid hsl(20 12% 10% / 0.1)' }} />
        </div>
      </section>

      {/* ── Dónde se ve el método (AULA as product) ─ */}
      <section className="bg-gray-100 border-y border-[hsl(20_12%_10%/0.1)] px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div>
              <span className="eyebrow">
                <span className="dot" />
                Dónde se ve el método
              </span>
              <h2 className="editorial-display mt-6 text-[clamp(2.5rem,5vw,4.75rem)]">
                AULA es producto.
                <br />
                <span className="serif-it">El servicio</span> es lo que lo hace valioso.
              </h2>
            </div>
            <p className="max-w-[38rem] text-base leading-relaxed text-foreground/72 md:text-lg">
              Sin contexto institucional, un motor de IA es commodity. Con criterio pedagógico,
              currículo, evaluación y lenguaje propios, empieza a comportarse como una extensión
              de la institución.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {context.map((c, i) => (
              <div
                key={c.t}
                className="pt-6"
                style={{
                  borderTop: '2px solid var(--foreground)',
                }}
              >
                <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground/55">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="editorial-display mb-3 text-2xl md:text-[1.75rem]">{c.t}</h3>
                <p className="text-sm leading-relaxed text-foreground/66">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── No somos para todos ──────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <span className="eyebrow mb-6 inline-flex">
            <span className="dot" />
            No somos para todos
          </span>
          <h2 className="mb-16 max-w-[60rem] editorial-display text-[clamp(2.25rem,5vw,4.75rem)]">
            ABN <span className="serif-it">no es</span> para instituciones que:
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {notForUs.map((l, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[hsl(20_12%_10%/0.1)] bg-white p-7"
              >
                <span
                  className="font-display text-3xl font-semibold tracking-tight"
                  style={{ color: 'var(--gray-400)' }}
                >
                  —
                </span>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/72">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
