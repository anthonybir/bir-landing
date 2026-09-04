import Link from 'next/link';
import { PageIntro, ContactClose } from '../PageLayout';
import ProductFigure from '../ProductFigure';
import { pageMetadata } from '../page-metadata';

export const metadata = pageMetadata('Aula', 'Gestión académica y preparación de materiales con fuentes institucionales, IA gobernada y revisión docente.', '/aula');

export default function AulaPage() {
  return (
    <>
      <PageIntro label="Aula · Formación" title="Del programa al trabajo de cada clase.">
        <p>Aula conecta la gestión académica, las fuentes del curso y la preparación de materiales. La IA ayuda a elaborar borradores dentro del contexto de la institución; el equipo docente revisa y aprueba.</p>
        <Link href="/contacto" className="btn-primary mt-8">Consultar sobre Aula</Link>
      </PageIntro>
      <section className="page-container page-section" aria-label="Aula en uso">
        <ProductFigure src="/screenshots/aula-planificacion-docente.png" alt="Planificación docente en Aula: fuentes, preparación de la clase y aprobación" width={2880} height={1624} priority />
      </section>
      <section className="page-container" aria-label="Cómo se organiza el trabajo">
        <div className="editorial-grid">
          <article className="editorial-item"><p className="label-caps">01 · Contexto</p><h2 className="display section-title">Las fuentes forman parte del curso.</h2><p className="body-copy">Documentos, programa e instrucciones de la institución acompañan la preparación. El equipo trabaja con un contexto común y puede revisar qué material utiliza.</p></article>
          <article className="editorial-item"><p className="label-caps">02 · Revisión</p><h2 className="display section-title">Cada borrador tiene un siguiente paso.</h2><p className="body-copy">Preparar, revisar y aprobar son momentos distintos. La dirección puede seguir el estado del trabajo y el docente conserva el criterio sobre el material.</p></article>
        </div>
        <p className="body-copy mt-10">El caso de IBA muestra esta aplicación a la formación pastoral. El alcance se define con cada institución.</p>
        <Link href="/casos#iba" className="link-quiet mt-6 inline-block font-sans text-base">Ver el caso de IBA</Link>
      </section>
      <ContactClose title="Partamos de tu programa de formación.">Cuéntanos cómo organizáis los cursos, qué fuentes utilizáis y dónde se acumula el trabajo de preparación o revisión.</ContactClose>
    </>
  );
}
