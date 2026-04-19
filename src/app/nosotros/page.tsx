import type { Metadata } from 'next';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Nosotros | ABN — Agencia Bir Nuñez',
  description:
    'Conocé a la Junta Directiva de ABN. Experiencia corporativa internacional, misiones globales y pedagogía institucional al servicio de Latinoamérica.',
};

const directors = [
  {
    initials: 'AB',
    role: 'Cofundador & Socio Director',
    name: 'Anthony Bir',
    tag: 'Dirección + sistema',
    bio: 'Experiencia en ventas de exportación en Heinz, ventas de proyectos e implementación SAP en Kontron AG, y liderazgo internacional en Thermo Fisher Scientific (incluyendo el proyecto KAUST en Arabia Saudita). Hoy sostiene la arquitectura técnica y el estándar operativo de ABN.',
    tags: ['Arquitectura', 'Producto', 'Operación'],
    gradient: 'linear-gradient(135deg, hsl(173 58% 25%) 0%, hsl(173 58% 39%) 100%)',
  },
  {
    initials: 'JB',
    role: 'Cofundador & Socio',
    name: 'Joseph Bir',
    tag: 'Misiones + teología',
    bio: 'Licenciatura en Teología del Texas Bible College. Cuatro décadas de experiencia en Misiones Globales de la UPCI, con liderazgo misionero en Paraguay, Perú y la red GATS en Sudamérica.',
    tags: ['Misiones', 'Teología', 'GATS'],
    gradient: 'linear-gradient(135deg, hsl(173 58% 15%) 0%, hsl(173 58% 34%) 100%)',
  },
  {
    initials: 'LB',
    role: 'Socia',
    name: 'Loretta Bir',
    tag: 'Pedagogía + formación',
    bio: 'Licenciatura en Educación Cristiana del Texas Bible College. Líder GATS en IBA Paraguay y fundadora de la escuela K-12 en Lambaré que dio origen a los sistemas que hoy ABN ofrece.',
    tags: ['Pedagogía', 'IBA', 'K-12'],
    gradient: 'linear-gradient(135deg, hsl(173 58% 29%) 0%, hsl(173 58% 50%) 100%)',
  },
  {
    initials: 'DN',
    role: 'Socia',
    name: 'Diana Nuñez',
    tag: 'Gestión educativa',
    bio: 'Maestría en Gestión Educativa. Más de 20 años de experiencia en pedagogía de escuelas privadas y responsable de la línea institucional que alimenta el criterio de AULA.',
    tags: ['Gestión', 'Currículum', 'Criterio'],
    gradient: 'linear-gradient(135deg, hsl(173 58% 34%) 0%, hsl(173 58% 55%) 100%)',
  },
] as const;

const principles = [
  [
    '01',
    'La institución manda',
    'No hay "mejores prácticas" genéricas que ganen contra el criterio institucional. Si hay tensión, se resuelve arriba, no por default técnico.',
  ],
  [
    '02',
    'El estándar sobrevive a las personas',
    'Un sistema que sólo funciona cuando alguien está encima es un fracaso futuro. Diseñamos para que siga ordenado sin héroes.',
  ],
  [
    '03',
    'Producción antes que promesa',
    'Todo lo que ofrecemos vive primero en nuestra propia operación. Lo que no aguantó AENA o IPUPY, no llega al cliente.',
  ],
  [
    '04',
    'Honestidad sobre alcance',
    'Preferimos decir "esto no entra" antes que entregar un sistema que no se sostenga en 6 meses. El "sí" de ABN cuesta, y por eso aguanta.',
  ],
] as const;

export default function NosotrosPage() {
  return (
    <>
      {/* ── Editorial hero ───────────────────────── */}
      <section className="px-6 pt-10 pb-6 md:px-12 md:pt-14 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 grid items-start gap-8 md:grid-cols-[80px_1fr]">
            <span className="issue-marker">TEAM</span>
            <span className="eyebrow">
              <span className="dot" />
              Quién sostiene el estándar
            </span>
          </div>

          <h1 className="editorial-display my-4 text-[clamp(2.5rem,11vw,10.75rem)] md:my-8">
            Experiencia
            <br />
            corporativa,{' '}
            <span className="serif-it">
              formación
              <br />
              pedagógica
            </span>
            ,<br />
            décadas juntas.
          </h1>

          <div className="rule-ink grid items-start gap-10 pt-8 md:grid-cols-2">
            <p className="max-w-[32rem] font-display text-lg font-medium leading-snug tracking-tight text-foreground md:text-xl">
              ABN es la reunión de trayectorias que, por separado, resuelven{' '}
              <span className="serif-it">una pieza</span>. Juntas, sostienen un estándar.
            </p>
            <p className="max-w-[30rem] text-[0.95rem] text-foreground/72">
              No somos una consultora de slide deck. Cada sistema que entregamos vive primero en
              nuestra propia operación — AENA, IPUPY, IBA — antes de llegar a una institución
              cliente.
            </p>
          </div>
        </div>
      </section>

      {/* ── Directors ────────────────────────────── */}
      <section aria-label="Equipo directivo" className="mt-20 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="eyebrow mb-12 inline-flex">
            <span className="dot" />
            Dirección
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {directors.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-[hsl(20_12%_10%/0.1)] bg-white p-8"
              >
                <div
                  className="relative mb-6 overflow-hidden rounded-xl"
                  style={{ aspectRatio: '1 / 1', background: p.gradient }}
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'radial-gradient(400px 200px at 30% 20%, rgba(255,255,255,0.22), transparent)',
                    }}
                  />
                  <span
                    className="absolute font-display font-bold"
                    style={{
                      bottom: 20,
                      left: 24,
                      fontSize: 148,
                      color: 'rgba(255,255,255,0.22)',
                      letterSpacing: '-0.05em',
                      lineHeight: 0.8,
                    }}
                  >
                    {p.initials}
                  </span>
                  <span className="pill pill--on-dark" style={{ position: 'absolute', top: 18, left: 20 }}>
                    <span className="dot" />
                    Foto en próxima versión
                  </span>
                </div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[color:var(--accent-dark)]">
                  {p.tag}
                </div>
                <h3 className="editorial-display mt-3 mb-2 text-3xl md:text-4xl">{p.name}</h3>
                <p className="mb-5 text-sm font-medium text-foreground/66">{p.role}</p>
                <p className="mb-6 text-[0.95rem] leading-relaxed text-foreground/72">{p.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[hsl(20_12%_10%/0.1)] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-foreground/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles (dark panel) ──────────────── */}
      <section className="dark-section px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <span className="eyebrow eyebrow--on-dark mb-6 inline-flex">
            <span className="dot" />
            Principios
          </span>
          <h2 className="editorial-display mb-16 max-w-[72rem] text-background text-[clamp(2.5rem,6vw,5.75rem)]">
            Cómo decide ABN
            <br />
            cuando{' '}
            <span className="serif-it" style={{ color: 'var(--signal)' }}>
              nadie está mirando.
            </span>
          </h2>
          <div className="grid md:grid-cols-2">
            {principles.map(([n, t, d], i) => (
              <div
                key={n}
                className="p-8 md:p-10"
                style={{
                  borderTop: '1px solid hsl(0 0% 100% / 0.18)',
                  borderRight: i % 2 === 0 ? '1px solid hsl(0 0% 100% / 0.18)' : undefined,
                }}
              >
                <span
                  className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
                  style={{ color: 'var(--signal)' }}
                >
                  {n}
                </span>
                <h3 className="editorial-display mt-3 mb-3 text-2xl text-background md:text-[1.75rem]">
                  {t}
                </h3>
                <p className="text-sm leading-relaxed text-background/72">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
