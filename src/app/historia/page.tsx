import Link from 'next/link';
import JsonLd from '../JsonLd';
import { ContactClose, PageIntro } from '../PageLayout';
import { pageMetadata } from '../page-metadata';
import { absoluteUrl, PERSON_ID, CAREER } from '../site-information';

export const metadata = pageMetadata(
  'Mi historia',
  'La trayectoria de Anthony Bir: ventas de exportación, proyectos internacionales, logística, dirección educativa, tesorería y sistemas.',
  '/historia',
);

export default function HistoriaPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        '@id': absoluteUrl('/historia#profile'),
        url: absoluteUrl('/historia'),
        name: 'La trayectoria de Anthony Bir',
        mainEntity: { '@type': 'Person', '@id': PERSON_ID, name: 'Anthony Bir', url: absoluteUrl('/historia') },
      }} />
      <PageIntro label="Historia" title="Mi camino hasta aquí.">
        <p>
          Mi trabajo pasó por ventas de exportación, proyectos internacionales y logística antes de llegar a la dirección educativa, la tesorería y los sistemas que hoy construyo en Paraguay.
        </p>
      </PageIntro>

      <section className="page-container profile-section" aria-labelledby="recorrido-title">
        <p className="label-caps text-brand-teal">Recorrido</p>
        <h2 id="recorrido-title" className="display section-title">Una trayectoria entre organizaciones.</h2>
        <div className="profile-list">
          {CAREER.map((item) => (
            <div key={`${item.date}-${item.organization}`} className="profile-row profile-row-timeline">
              <p className="label-caps">{item.date}</p>
              <p className="display profile-item">{item.organization}</p>
              <p className="body-copy">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-container page-section" aria-labelledby="actualidad-title">
        <div className="method-row">
          <div>
            <p className="label-caps text-brand-teal">Actualidad</p>
            <h2 id="actualidad-title" className="display section-title mt-4">Dirección, tesorería y sistemas.</h2>
          </div>
          <div className="body-copy">
            <p>Desde 2020 presido el Consejo Administrativo de AENA · Nuevas Alturas. También llevo la tesorería de IPU Paraguay, una red de iglesias.</p>
            <p className="mt-4">En esos dos espacios construyo sistemas para el trabajo diario. La IA ayuda en tareas definidas y las personas siguen revisando y aprobando el trabajo.</p>
          </div>
        </div>
      </section>

      <section className="page-container page-section" aria-labelledby="abn-title">
        <div className="method-row">
          <div>
            <p className="label-caps text-brand-teal">ABN · Agencia Bir Núñez</p>
            <h2 id="abn-title" className="display section-title mt-4">De la experiencia a un servicio.</h2>
          </div>
          <div className="body-copy">
            <p>Fundé ABN para ayudar a otras organizaciones a ordenar sus procesos, conectar su información y construir sistemas propios.</p>
            <p className="mt-4">El trabajo empieza por entender la operación y acordar una prioridad. Luego construimos por etapas e incorporamos IA cuando resuelve una tarea concreta.</p>
            <p className="mt-5"><Link href="/servicios" className="link-quiet">Conoce los servicios de ABN</Link></p>
          </div>
        </div>
      </section>

      <ContactClose>Si quieres conversar sobre tu organización, escríbeme. Podemos revisar qué está costando más y por dónde conviene empezar.</ContactClose>
    </>
  );
}
