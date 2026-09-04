import Link from 'next/link';
import { PageIntro, ContactClose } from '../PageLayout';
import { pageMetadata } from '../page-metadata';

export const metadata = pageMetadata('Nosotros', 'Dirección, sistemas, pedagogía, derecho y finanzas. Un equipo con experiencia directa en las operaciones que presenta como casos.', '/nosotros');

const team = [
  { name: 'Anthony Bir', area: 'Dirección y sistemas', text: 'Preside el Consejo Administrativo de AENA y es tesorero de IPU Paraguay. Conecta las necesidades de dirección con el diseño y la construcción de los sistemas que usan ambas organizaciones.' },
  { name: 'Diana', area: 'Pedagogía', text: 'Dirige la pedagogía de AENA y el marco curricular MEAA 3.0. Aporta los criterios de enseñanza, planificación y evaluación que el sistema debe respetar.' },
  { name: 'Danae', area: 'Derecho', text: 'Trabaja en el encuadre legal de cada implementación: contratos, responsabilidades y relación con el regulador que corresponda, incluido el MEC en educación.' },
  { name: 'Stephanie', area: 'Finanzas', text: 'Aporta experiencia en operación financiera y gestión de cobros. Participó en la recuperación de la morosidad de AENA.' },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <PageIntro label="Nosotros" title="Un equipo que dirige y construye.">
        <p>ABN reúne dirección, tecnología, pedagogía, derecho y finanzas. Nuestra experiencia nace de gestionar un colegio y la tesorería de una red de iglesias: reunir información, decidir y responder por lo que ocurre después.</p>
        <p>Construimos los sistemas para sostener ese trabajo. Esa experiencia también nos permite entender los procesos de otras organizaciones y definir con ellas qué necesitan mejorar.</p>
      </PageIntro>
      <section className="page-container page-section" aria-label="Equipo">
        <div className="editorial-grid">{team.map(person => <article key={person.name} className="editorial-item"><p className="label-caps">{person.area}</p><h2 className="display section-title">{person.name}</h2><p className="body-copy">{person.text}</p></article>)}</div>
      </section>
      <section className="teal-band" aria-labelledby="origin-title">
        <div className="page-container py-16 md:py-20 grid gap-8 md:grid-cols-2">
          <h2 id="origin-title" className="display section-title">Experiencia que se puede explicar.</h2>
          <div className="font-sans text-base leading-relaxed text-brand-cream">
            <p>AENA pasó de una morosidad del 70% al 2,9% en tres años de dirección directa. En IPU Paraguay, el trabajo reúne la tesorería de unas 30 iglesias. Los sistemas forman parte de esa gestión.</p>
            <Link href="/casos" className="link-quiet mt-6 inline-block">Leer los casos</Link>
          </div>
        </div>
      </section>
      <section className="page-container pt-16 md:pt-20" aria-label="Criterios de trabajo">
        <p className="label-caps mb-8">Cómo trabajamos</p>
        <div className="grid gap-8 md:grid-cols-3 font-sans text-base leading-relaxed">
          <p>Entendemos el proceso antes de elegir la herramienta.</p>
          <p>Definimos quién puede consultar, revisar y aprobar cada parte del trabajo.</p>
          <p>El equipo de la organización participa, aprende y puede dar continuidad al sistema.</p>
        </div>
      </section>
      <ContactClose>Si necesitas conectar la información con las decisiones de tu equipo, empecemos por conocer cómo trabajáis.</ContactClose>
    </>
  );
}
