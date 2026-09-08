import Link from 'next/link';
import { PageIntro, ContactClose } from '../PageLayout';
import { pageMetadata } from '../page-metadata';

export const metadata = pageMetadata('Servicios', 'Diagnóstico, implementación y acompañamiento: sistemas de gestión e IA gobernada para las decisiones de tu organización.', '/servicios');

const modes = [
  {
    num: '01',
    title: 'Entender el problema',
    when: 'Cuando el problema todavía no está bien definido',
    plazo: '2 a 4 semanas',
    desc: 'Revisamos cómo trabaja la organización, dónde se frenan las decisiones y qué riesgos necesitan atención. El resultado es una lista de prioridades para empezar.',
    bullets: [
      'Revisión de procesos, información y responsabilidades',
      'Riesgos ordenados por urgencia',
      'Primer plan de trabajo, con responsables',
    ],
  },
  {
    num: '02',
    title: 'Implementación por etapas',
    when: 'Cuando ya hay una prioridad clara',
    plazo: '3 a 6 meses',
    desc: 'Tomamos un problema concreto y acordamos qué debe cambiar. Implementamos por etapas para que la organización siga trabajando. Definimos los datos, los permisos y los pasos de revisión. El equipo aprende a usar el sistema mientras se incorpora a la operación.',
    bullets: [
      'Un problema y un alcance definidos',
      'Sistema, reglas y capacitación para el mismo equipo',
      'Trabajo por etapas, con un responsable definido',
    ],
  },
  {
    num: '03',
    title: 'Acompañamiento a la dirección',
    when: 'Cuando varias áreas necesitan avanzar juntas',
    plazo: 'Continuo',
    desc: 'Acompañamos a la dirección para revisar resultados, ajustar procesos y sostener el uso del sistema. Sumamos criterio financiero, legal o pedagógico cuando la operación lo requiere.',
    bullets: [
      'Coordinación entre las áreas',
      'Ajustes según lo que ocurre en la operación',
      'Responsabilidades claras dentro del equipo',
    ],
  },
] as const;

const sectors = [
  {
    title: 'Educación',
    desc: 'Colegios y centros de formación: planificación, libreta digital, comunicación con familias y gestión de cobros.',
  },
  {
    title: 'Organizaciones eclesiásticas',
    desc: 'Tesorería por partida doble, informes por sede y cierres mensuales auditables para redes de iglesias.',
  },
] as const;

export default function ServiciosPage() {
  return (
    <>
      <PageIntro label="ABN · Servicios" title="Empecemos por lo que necesitas resolver.">
        <p>En ABN revisamos cómo trabaja tu organización y qué necesita mejorar. Acordamos una prioridad, construimos por etapas y acompañamos al equipo para que pueda usar el sistema. Incorporamos IA cuando ayuda a resolver una tarea concreta.</p>
      </PageIntro>
      <section className="page-container page-section" aria-label="Tres modos de trabajo">
        {modes.map(mode => (
          <article key={mode.num} className="method-row">
            <div>
              <p className="label-caps">{mode.num} · {mode.plazo}</p>
              <h2>{mode.title}</h2>
              <p className="body-copy">{mode.when}</p>
            </div>
            <div>
              <p className="body-copy">{mode.desc}</p>
              <ul className="mt-6 space-y-3 font-sans text-base list-disc pl-5">{mode.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          </article>
        ))}
        <p className="body-copy mt-8">Los plazos son orientativos. Acordamos el alcance y el calendario después del diagnóstico.</p>
      </section>
      <section className="teal-band" aria-labelledby="working-agreement">
        <div className="page-container py-16 md:py-20 grid gap-8 md:grid-cols-2">
          <h2 className="display section-title" id="working-agreement">Qué necesitamos para trabajar juntos.</h2>
          <ul className="font-sans text-base leading-relaxed space-y-5 text-brand-cream">
            <li>Una persona de dirección que pueda decidir y validar prioridades.</li>
            <li>Acceso acordado a los procesos y a la información que debemos ordenar.</li>
            <li>Un equipo dispuesto a revisar cómo trabaja y a incorporar el sistema.</li>
          </ul>
        </div>
      </section>
      <section className="page-container pt-16 md:pt-20" aria-label="Dónde hemos trabajado">
        <p className="label-caps mb-8">Dónde hemos trabajado</p>
        <div className="editorial-grid">{sectors.map(sector => <article key={sector.title}><h2 className="font-sans text-base font-semibold">{sector.title}</h2><p className="body-copy mt-3">{sector.desc}</p></article>)}</div>
        <Link href="/casos" className="link-quiet mt-8 inline-block font-sans text-base">Ver el trabajo realizado</Link>
      </section>
      <ContactClose>Cuéntame qué está costando más en el trabajo diario. Con esa primera conversación podemos ver si ABN puede ayudar y por dónde empezar.</ContactClose>
    </>
  );
}
