import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'AULA | Plataforma de Planificación Académica con IA — ABN',
  description:
    'AULA: motor de planificación académica con IA + contexto institucional. Para colegios, seminarios e instituciones educativas en Latinoamérica.',
};

const formula = [
  {
    number: '01',
    title: 'ABN documenta la institución',
    copy:
      'Marco pedagógico, currículo, evaluación, lenguaje y operación real se convierten en un contexto usable.',
  },
  {
    number: '02',
    title: 'Ese contexto entra al motor',
    copy:
      'AULA deja de responder como herramienta genérica y empieza a producir bajo el criterio de la institución.',
  },
  {
    number: '03',
    title: 'El equipo genera con estándar',
    copy:
      'Docentes y coordinadores trabajan con materiales más consistentes, menos corrección y menos improvisación.',
  },
] as const;

const contextAreas = [
  'Marco pedagógico y principios no negociables',
  'Pack curricular y exigencias por grado o nivel',
  'Evaluación, rúbricas y políticas de revisión',
  'Lenguaje institucional, tono y cultura local',
  'Banco de recursos y patrones pedagógicos aprobados',
  'Operación docente y formatos de salida útiles',
] as const;

export default function AulaPage() {
  return (
    <>
      <section className="dark-section px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div className="fade-in max-w-xl">
            <p className="section-kicker mb-4">Plataforma AULA</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
              Inteligencia institucional, no generación genérica.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-background/72 md:text-lg">
              AULA es un motor de planificación académica asistido por IA cuya calidad depende
              de una sola variable: cuánto contexto institucional se le entrega.
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-background/52">
              ABN construye ese contexto. El diferencial no es un prompt mejor. Es una institución
              mejor documentada y mejor gobernada dentro de la herramienta.
            </p>
            <Link
              href="/#contacto"
              className="btn-primary mt-8 inline-flex items-center justify-center rounded-full bg-background px-6 py-3.5 font-sans text-sm font-medium text-foreground hover:bg-white"
            >
              Hablemos de tu institución
            </Link>
          </div>

          <div className="scroll-reveal-right">
            <div className="editorial-media rounded-[1.9rem] border-[#F5F3EE]/10 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
              <div className="browser-chrome">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <Image
                src="/screenshots/editorial-aena.png"
                alt="AULA in production"
                width={2814}
                height={1808}
                priority
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 56vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame bg-background px-6 py-18 md:px-12 md:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker mb-4">La fórmula</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.06] md:text-5xl">
              Cómo funciona AULA en una institución real.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {formula.map((step) => (
              <div key={step.number} className="border-t border-[#1A1A1A]/10 pt-5">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent/80">
                  {step.number}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{step.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/64">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-md">
            <p className="section-kicker mb-4">Dónde opera</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.06] md:text-5xl">
              Dos contextos. Un mismo principio.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-t border-[#1A1A1A]/10 pt-5">
              <p className="font-serif text-3xl leading-tight">Seminarios teológicos</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/64">
                Sílabos teológicos, planificación de cursos, transcriptos, asistencia y cumplimiento
                central bajo un marco institucional coherente.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-foreground/38">
                IBA Paraguay + red IBA
              </p>
            </div>
            <div className="border-t border-[#1A1A1A]/10 pt-5">
              <p className="font-serif text-3xl leading-tight">Colegios K-12</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/64">
                Planificaciones, materiales, evaluaciones y comunicación alineadas al programa,
                al estilo de enseñanza y al marco institucional de cada colegio.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-foreground/38">
                MEC Paraguay + adaptación local
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-start">
          <div className="max-w-md">
            <p className="section-kicker mb-4">Qué construye ABN</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.05] md:text-5xl">
              El contexto institucional que vuelve útil al motor.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-background/68">
              Cuando AULA trabaja bien, no es porque “la IA salió mejor”. Es porque la institución
              ya dejó claro qué valora, cómo enseña, cómo corrige y qué resultado considera aceptable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {contextAreas.map((item) => (
              <div key={item} className="border-t border-white/12 pt-5">
                <p className="font-sans text-sm leading-relaxed text-background/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-18 md:px-12 md:py-22">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker mb-4">Resultado</p>
          <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.06] md:text-5xl">
            Probado en producción antes de llegar a cualquier demo.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="proof-metric">
              <p className="font-sans text-4xl font-semibold tracking-tight text-foreground">AENA</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Colegio K-12 usando AULA dentro de su operación académica.
              </p>
            </div>
            <div className="proof-metric">
              <p className="font-sans text-4xl font-semibold tracking-tight text-foreground">IBA</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Seminario teológico extendiendo el modelo a varios países.
              </p>
            </div>
            <div className="proof-metric">
              <p className="font-sans text-4xl font-semibold tracking-tight text-foreground">DOCX + PDF</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Salidas listas para revisión y uso real dentro del equipo.
              </p>
            </div>
            <div className="proof-metric">
              <p className="font-sans text-4xl font-semibold tracking-tight text-accent">100%</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Construido y operado por la misma estructura institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
