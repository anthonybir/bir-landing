import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BrandMark from './BrandMark';
import { CAREER, SITE_DESCRIPTION, SITE_TITLE } from './site-information';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <section className="page-container profile-hero" aria-labelledby="home-title">
        <div className="profile-identity" aria-label="Anthony Bir">
          <BrandMark className="profile-monogram" width={280} height={217} />
          <p className="identity-name">Anthony Bir</p>
          <p className="identity-descriptor">Dirección · Tesorería · Sistemas</p>
        </div>
        <div className="profile-hero-copy">
          <p className="label-caps">Lambaré, Paraguay</p>
          <h1 id="home-title" className="display display-hero">Hola, soy <br />Anthony Bir.</h1>
          <p className="profile-intro">
            Dirijo un colegio y llevo la tesorería de una red de iglesias en Paraguay.
            También construyo los sistemas que usamos en el trabajo diario, con apoyo de IA y revisión humana.
          </p>
          <p className="body-copy">Soy fundador de <Link href="/servicios" className="link-quiet">ABN · Agencia Bir Núñez</Link>, donde llevo esa experiencia a otras organizaciones.</p>
          <Link href="/casos" className="profile-work-link">Ver mi trabajo <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <figure className="page-container profile-hero-figure">
        <Image
          src="/images/leadership-working-table.webp"
          alt="Cuadernos, documentos y un ordenador sobre una mesa de trabajo"
          width={1536}
          height={1024}
          loading="eager"
          sizes="(min-width: 1264px) 1200px, (min-width: 600px) calc(100vw - 64px), calc(100vw - 40px)"
          className="profile-hero-image"
        />
        <figcaption>Mesa de trabajo · Imagen conceptual</figcaption>
      </figure>

      <section id="trayectoria" className="page-container profile-section" aria-labelledby="trayectoria-title">
        <div className="profile-section-heading">
          <p className="label-caps">Trayectoria</p>
          <h2 id="trayectoria-title" className="display section-title">Mi trayectoria.</h2>
        </div>
        <div className="profile-list">
          {CAREER.map((item) => (
            <div key={`${item.date}-${item.organization}`} className="profile-row profile-row-timeline">
              <p className="label-caps">{item.date}</p>
              <p className="display profile-item">{item.organization}</p>
              <p className="body-copy">{item.role}</p>
            </div>
          ))}
        </div>
        <p className="body-copy profile-follow-up">
          <Link href="/historia" className="link-quiet">Conoce la historia completa</Link>
        </p>
      </section>
      <section id="contacto" className="page-container profile-section profile-contact" aria-labelledby="contacto-title">
        <div>
          <p className="label-caps">Contacto</p>
          <h2 id="contacto-title" className="display section-title">Hablemos.</h2>
        </div>
        <div className="profile-actions">
          <a href="mailto:anthony@bir.com.py" className="btn-primary">Escríbeme</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
        </div>
      </section>
    </>
  );
}
