import type { Metadata } from 'next';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Nosotros | ABN — Agencia Bir Nuñez',
  description:
    'Conocé a la Junta Directiva de ABN. Experiencia corporativa internacional, misiones globales y pedagogía institucional al servicio de Latinoamérica.',
};

const leaders = [
  {
    initials: 'JB',
    role: 'Cofundador & Socio',
    name: 'Joseph Bir',
    copy:
      'Licenciatura en Teología del Texas Bible College. Cuatro décadas de experiencia en Misiones Globales de la UPCI, con liderazgo misionero en Paraguay, Perú y la red GATS en Sudamérica.',
  },
  {
    initials: 'LB',
    role: 'Socia',
    name: 'Loretta Bir',
    copy:
      'Licenciatura en Educación Cristiana del Texas Bible College. Líder GATS en IBA Paraguay y fundadora de la escuela K-12 en Lambaré que dio origen a los sistemas que hoy ABN ofrece.',
  },
  {
    initials: 'DN',
    role: 'Socia',
    name: 'Diana Nunez',
    copy:
      'Maestría en Gestión Educativa. Más de 20 años de experiencia en pedagogía de escuelas privadas y responsable de la línea institucional que alimenta el criterio de AULA.',
  },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-background px-6 pb-16 pt-18 md:px-12 md:pb-20 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div className="max-w-md">
            <p className="section-kicker mb-4">Nosotros</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.03] md:text-6xl">
              Una dirección construida desde práctica institucional real.
            </h1>
          </div>
          <div className="grid gap-5 text-foreground/68 md:max-w-2xl md:grid-cols-2">
            <p className="font-sans text-base leading-relaxed">
              ABN nace de una convergencia poco común: experiencia corporativa internacional,
              décadas de servicio misionero y educativo en Sudamérica, y una operación propia
              lo suficientemente exigente como para obligarnos a diseñar sistemas serios.
            </p>
            <p className="font-sans text-base leading-relaxed">
              No hablamos de estructura desde afuera. La usamos todos los días en escuela,
              seminario y tesorería. Esa mezcla de criterio y práctica es la que sostiene la
              oferta completa de ABN.
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame bg-background px-6 py-12 md:px-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="proof-metric">
            <p className="font-sans text-4xl font-semibold tracking-tight text-foreground">AENA</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              gestión escolar y AULA en operación cotidiana.
            </p>
          </div>
          <div className="proof-metric">
            <p className="font-sans text-4xl font-semibold tracking-tight text-foreground">IBA</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              ERP académico y expansión regional bajo la misma lógica institucional.
            </p>
          </div>
          <div className="proof-metric">
            <p className="font-sans text-4xl font-semibold tracking-tight text-accent">IPUPY</p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
              tesorería multi-sede con trazabilidad y gobernanza financiera.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-[#1A1A1A]/10 pt-8 md:grid-cols-[0.34fr_0.66fr] md:gap-14">
          <div>
            <p className="section-kicker mb-4">Founder-led</p>
            <p className="font-serif text-3xl leading-tight md:text-4xl">Anthony Bir</p>
            <p className="mt-3 font-sans text-sm font-medium text-foreground/48">
              Cofundador & Socio Director
            </p>
          </div>

          <div className="grid gap-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
              <div className="team-avatar flex h-20 w-20 items-center justify-center rounded-2xl border border-[#1A1A1A]/10 bg-background text-foreground md:h-24 md:w-24">
                <span className="font-sans text-2xl font-semibold md:text-3xl">AB</span>
              </div>
              <div>
                <h2 className="font-serif text-4xl font-semibold leading-none md:text-5xl">
                  Dirección con experiencia corporativa y ejecución institucional propia.
                </h2>
                <p className="mt-5 font-sans text-base leading-relaxed text-foreground/68">
                  Anthony Bir aporta experiencia en ventas de exportación en Heinz, ventas
                  de proyectos e implementación SAP en Kontron AG, y liderazgo de proyectos
                  internacionales en Thermo Fisher Scientific, incluyendo contribuciones al
                  proyecto KAUST en Jeddah, Arabia Saudita.
                </p>
                <p className="mt-4 font-sans text-base leading-relaxed text-foreground/68">
                  En ABN, esa trayectoria se traduce en arquitectura institucional: es el
                  responsable detrás de AENA Admin e IPUPY, plataformas que no solo se
                  presentan al mercado, sino que sostienen la operación real de la agencia
                  y su ecosistema.
                </p>
              </div>
            </div>

            <div className="border-t border-[#1A1A1A]/10 pt-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-foreground/38">
                Por qué importa
              </p>
              <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-foreground/62">
                La propuesta de ABN está dirigida por personas que combinan gobierno institucional,
                disciplina operativa y práctica diaria sobre los mismos sistemas que ofrecen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-18 md:px-12 md:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker mb-4">Junta directiva</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.05] md:text-5xl">
              Liderazgo complementario, no perfiles intercambiables.
            </h2>
          </div>

          <div className="mt-12 grid gap-10">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="grid gap-5 border-t border-[#1A1A1A]/10 pt-6 md:grid-cols-[120px_280px_1fr] md:gap-8"
              >
                <div className="team-avatar flex h-16 w-16 items-center justify-center rounded-2xl border border-[#1A1A1A]/10 bg-white text-foreground md:h-18 md:w-18">
                  <span className="font-sans text-xl font-semibold">{leader.initials}</span>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                    {leader.role}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-none">{leader.name}</h3>
                </div>
                <p className="max-w-3xl font-sans text-sm leading-relaxed text-foreground/64">
                  {leader.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
