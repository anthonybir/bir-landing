import type { Metadata } from 'next';
import Image from 'next/image';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Servicios | ABN — Agencia Bir Nuñez',
  description:
    'Plataforma AULA: motor de IA con contexto institucional. Consultoría en transformación para colegios, seminarios e instituciones en Latinoamérica.',
};

const operatingModes = [
  {
    number: '01',
    title: 'Diagnóstico institucional',
    subtitle: 'Cuando el problema todavía no está bien definido',
    copy:
      'Auditamos operación, criterio y puntos de fricción para establecer qué necesita orden, qué necesita sistema y qué conviene dejar para después.',
    bullets: [
      'Diagnóstico operativo y pedagógico',
      'Priorización de riesgos y cuellos de botella',
      'Hoja de ruta inicial y responsables',
    ],
  },
  {
    number: '02',
    title: 'Implementación por frente',
    subtitle: 'Cuando ya hay una prioridad clara',
    copy:
      'Entramos sobre un frente concreto, con alcance definido, entregables claros y una lógica de implementación que no rompa la operación diaria.',
    bullets: [
      'Proyecto por área o por problema',
      'Sistema, criterio y capacitación en el mismo frente',
      'Ejecución escalonada con responsables visibles',
    ],
  },
  {
    number: '03',
    title: 'Acompañamiento integral',
    subtitle: 'Cuando varias áreas necesitan avanzar juntas',
    copy:
      'Coordinamos educación, tecnología y desarrollo institucional bajo una misma dirección para evitar proveedores sueltos y decisiones contradictorias.',
    bullets: [
      'Dirección transversal del proyecto',
      'Ajuste continuo según operación real',
      'Un solo equipo responsable del avance',
    ],
  },
] as const;

export default function ServiciosPage() {
  return (
    <>
      <section className="dark-section px-6 py-18 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.88fr_1.12fr] md:items-end">
          <div className="fade-in max-w-xl">
            <p className="section-kicker mb-4">Servicios ABN</p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.02] md:text-6xl">
              Intervenimos donde la institución necesita criterio, no solo software.
            </h1>
            <p className="mt-6 font-sans text-base leading-relaxed text-background/70 md:text-lg">
              ABN no vende una caja cerrada. Entra para leer la institución, construir
              estándar operativo y traducirlo en sistemas que sigan sirviendo cuando cambie
              el equipo o la herramienta.
            </p>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-background/52">
              AULA es uno de esos sistemas. El servicio es el método completo que permite
              que plataformas, procesos y personas trabajen bajo el mismo marco.
            </p>
          </div>

          <div className="scroll-reveal-right">
            <div className="editorial-media rounded-[1.75rem] border-[#F1EFE8]/10">
              <div className="browser-chrome">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <Image
                src="/screenshots/editorial-aena.png"
                alt="AULA editorial planning surface"
                width={2814}
                height={1808}
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
            <p className="section-kicker mb-4">Modos de trabajo</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.06] md:text-5xl">
              Tres formas de entrar. Una sola lógica de ejecución.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-foreground/66">
              La diferencia no está en un paquete comercial. Está en cuánto criterio hay
              que construir, cuánta coordinación hace falta y qué tan cerca necesita estar
              ABN del proceso.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {operatingModes.map((mode) => (
              <section key={mode.number} className="scroll-reveal border-t border-[#1A1A1A]/12 pt-5">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent/80">
                  {mode.number}
                </p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{mode.title}</h3>
                <p className="mt-2 font-sans text-sm font-medium text-foreground/48">
                  {mode.subtitle}
                </p>
                <p className="mt-5 font-sans text-sm leading-relaxed text-foreground/64">
                  {mode.copy}
                </p>
                <ul className="mt-6 space-y-3 border-t border-[#1A1A1A]/8 pt-5">
                  {mode.bullets.map((bullet) => (
                    <li key={bullet} className="font-sans text-sm leading-relaxed text-foreground/62">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <div className="max-w-md">
            <p className="section-kicker mb-4">Dónde se ve el método</p>
            <h2 className="font-serif text-4xl font-semibold leading-[1.06] md:text-5xl">
              AULA es producto. El servicio es el contexto que lo hace valioso.
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-foreground/66">
              Sin contexto institucional, un motor de IA es commodity. Con criterio
              pedagógico, currículo, evaluación y lenguaje propios, empieza a comportarse
              como una extensión de la institución.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-t border-[#1A1A1A]/10 pt-5">
              <p className="font-serif text-2xl">Marco pedagógico</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Filosofía, límites, estructura de clase y criterios no negociables.
              </p>
            </div>
            <div className="border-t border-[#1A1A1A]/10 pt-5">
              <p className="font-serif text-2xl">Pack curricular</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Contenidos, capacidades, estándares de grado y adaptación local.
              </p>
            </div>
            <div className="border-t border-[#1A1A1A]/10 pt-5">
              <p className="font-serif text-2xl">Operación docente</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/62">
                Entregables, revisión, comunicación y uso real dentro del equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
