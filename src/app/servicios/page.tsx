import type { Metadata } from 'next';
import Image from 'next/image';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Servicios | ABN — Agencia Bir Nuñez',
  description: 'Plataforma AULA: motor de IA con contexto institucional. Consultoría en transformación para colegios, seminarios e instituciones en Latinoamérica.',
};

export default function ServiciosPage() {
  return (
    <>
      {/* AI Motor — AULA Platform */}
      <section className="dark-section px-6 md:px-12 pt-24 pb-24 md:pt-32 md:pb-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="scroll-reveal-left">
              <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
                Plataforma AULA
              </p>
              <h1 className="font-serif font-bold text-3xl md:text-5xl leading-tight mb-6">
                Un motor genérico.<br />
                <span className="text-accent">Tu contexto institucional.</span>
              </h1>
              <p className="font-sans text-background/70 leading-relaxed mb-8">
                Hoy cada docente genera sus planes con ChatGPT de forma improvisada
                — sin criterio institucional, sin alineación curricular, sin coherencia
                entre grados. AULA invierte esa lógica: ABN documenta cómo funciona
                tu institución, carga ese contexto en la plataforma, y el motor
                produce planificaciones que suenan a tu escuela — no a una plantilla
                genérica.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">01</span>
                  <div>
                    <p className="font-sans font-medium text-sm">ABN construye tu contexto institucional</p>
                    <p className="font-sans text-xs text-background/50">Marco pedagógico + currículo + evaluación + cultura local — documentado y cargado en AULA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">02</span>
                  <div>
                    <p className="font-sans font-medium text-sm">El motor genera bajo tu estándar</p>
                    <p className="font-sans text-xs text-background/50">Planes, materiales, evaluaciones — alineados a TU visión, no a una plantilla genérica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-sans font-bold text-4xl text-accent/20 leading-none shrink-0 mt-0.5">03</span>
                  <div>
                    <p className="font-sans font-medium text-sm">El docente revisa, ajusta, ejecuta</p>
                    <p className="font-sans text-xs text-background/50">DOCX y PDF listos — el docente aporta su criterio, no su fin de semana</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Planificaci\u00f3n semanal', 'Texto base', 'Ficha de trabajo', 'Evaluaci\u00f3n', 'Comunicaci\u00f3n a padres', 'R\u00fabrica'].map((tag) => (
                  <span
                    key={tag}
                    className="capability-tag font-sans text-xs px-3 py-1.5 bg-background/10 rounded-sm text-background/70 border border-[#F5F3EE]/10 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="scroll-reveal-right">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-[#F5F3EE]/10">
                <div className="browser-chrome">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                </div>
                <Image
                  src="/screenshots/editorial-aena.png"
                  alt="AULA — Motor de planificación académica con contexto institucional"
                  width={2814}
                  height={1808}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="font-sans text-xs text-background/30 mt-4 text-center">
                Motor AULA — Planificaciones generadas bajo estándar institucional (AENA)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages / Engagement */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Formas de trabajo
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl line-accent">Cómo empezamos y cómo escalamos</h2>
            <p className="font-sans text-foreground/70 leading-relaxed max-w-3xl mt-6">
              No vendemos una caja cerrada. Empezamos con un diagnóstico claro,
              definimos una hoja de ruta y ejecutamos por fases según el nivel
              de madurez de tu institución.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Institutional Package */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="engagement-step">01</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Diagnóstico Institucional</h3>
              <p className="font-sans text-sm text-accent mb-4">Para colegios, seminarios e instituciones que necesitan ordenar primero</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Auditamos operación, estructura y puntos de riesgo para definir
                qué conviene resolver ahora, qué puede esperar y qué sistema
                hace falta construir.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Diagnóstico operativo e institucional</li>
                <li>• Priorización de riesgos y cuellos de botella</li>
                <li>• Recomendación por área</li>
                <li>• Hoja de ruta inicial</li>
              </ul>
            </div>

            {/* Implementation Package — Recommended */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border-2 border-[#C7A54A]/40 relative">
              <span className="engagement-badge">Más común</span>
              <p className="engagement-step">02</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Implementación por Frente</h3>
              <p className="font-sans text-sm text-accent mb-4">Para instituciones que ya saben qué problema quieren resolver</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Ejecutamos un frente específico o combinamos varios: educación,
                tecnología, o desarrollo institucional, con un alcance definido
                y responsables claros.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Proyecto por frente o por problema</li>
                <li>• Alcance, entregables y responsables definidos</li>
                <li>• Implementación escalonada</li>
                <li>• Capacitación del equipo interno</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="card-hover engagement-card bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <p className="engagement-step">03</p>
              <h3 className="font-sans font-semibold text-xl mb-2">Acompañamiento Integral</h3>
              <p className="font-sans text-sm text-accent mb-4">Para instituciones que necesitan ejecución continua y coordinación central</p>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Coordinamos varios frentes sobre una misma hoja de ruta para
                que la institución avance sin fragmentarse entre proveedores,
                planillas y decisiones aisladas.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li>• Dirección transversal del proyecto</li>
                <li>• Varios frentes trabajando sobre la misma prioridad</li>
                <li>• Seguimiento y ajustes continuos</li>
                <li>• Un solo equipo responsable del avance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
