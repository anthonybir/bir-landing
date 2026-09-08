import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_DESCRIPTION, SITE_TITLE } from './site-information';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

const career = [
  { date: '2005 a 2006', name: 'HJ Heinz', text: 'Coordinador de ventas de exportación' },
  { date: '2007 a 2011', name: 'Thermo Fisher Scientific', text: 'Líder de proyectos internacionales' },
  { date: '2012 a 2019', name: 'Empresa propia de logística', text: 'Propietario y gerente general' },
  { date: '2020 →', name: 'AENA · Nuevas Alturas', text: 'Presidente del Consejo Administrativo' },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="page-container profile-hero" aria-labelledby="home-title">
        <div className="profile-hero-copy">
        <h1 id="home-title" className="display display-hero">Hola, soy Anthony Bir.</h1>
        <p className="profile-intro">
          Dirijo un colegio y llevo la tesorería de una red de iglesias en Paraguay.
          También construyo los sistemas que usamos en el trabajo diario, con apoyo de IA y revisión humana.
        </p>
        <p className="body-copy">Soy fundador de <Link href="/servicios" className="link-quiet">ABN · Agencia Bir Núñez</Link>.</p>
        <p className="body-copy"><Link href="/casos" className="link-quiet">Ver mi trabajo</Link></p>
        </div>
        <figure className="profile-hero-figure">
          <Image
            src="/images/leadership-working-table.webp"
            alt="Cuadernos, documentos y un ordenador sobre una mesa de trabajo"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1264px) 576px, (min-width: 900px) 46vw, 100vw"
            className="profile-hero-image"
          />
          <figcaption>Mesa de trabajo · Imagen conceptual</figcaption>
        </figure>
      </section>

      <section id="trayectoria" className="page-container profile-section" aria-labelledby="trayectoria-title">
        <p className="label-caps text-brand-teal">Trayectoria</p>
        <h2 id="trayectoria-title" className="display section-title">Mi trayectoria.</h2>
        <div className="profile-list">
          {career.map((item) => (
            <div key={`${item.date}-${item.name}`} className="profile-row profile-row-timeline">
              <p className="label-caps">{item.date}</p>
              <p className="display profile-item">{item.name}</p>
              <p className="body-copy">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contacto" className="page-container profile-section" aria-labelledby="contacto-title">
        <p className="label-caps text-brand-teal">Contacto</p>
        <h2 id="contacto-title" className="display section-title">Hablemos.</h2>
        <div className="profile-actions">
          <a href="mailto:anthony@bir.com.py" className="btn-primary">Escríbeme</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
        </div>
      </section>
    </>
  );
}
