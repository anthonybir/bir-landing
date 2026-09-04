import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_DESCRIPTION, SITE_TITLE } from './site-information';

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy ">
          <p className="label-caps text-brand-teal">Sistemas de gestión · IA gobernada</p>
          <h1 id="home-title" className="display home-title">
            <span>Entiende tu organización.</span>
            <span>Decide con claridad.</span>
          </h1>
          <p className="home-intro">
            Convertimos hojas de cálculo y procesos dispersos en un sistema propio.
            Información conectada e IA con tus reglas, para decidir y dar seguimiento.
          </p>
          <div className="home-actions">
            <Link href="/contacto" className="btn-primary">Hablemos de tu sistema</Link>
            <Link href="/casos" className="link-quiet">Ver los casos</Link>
          </div>
        </div>
        <figure className="home-hero-figure ">
          <Image
            src="/images/leadership-working-table.webp"
            alt="Cuadernos, documentos y un ordenador sobre una mesa de trabajo"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1440px) 660px, (min-width: 900px) 48vw, 100vw"
            className="home-hero-image"
          />
          <figcaption>Mesa de trabajo · Imagen conceptual</figcaption>
        </figure>
      </section>

      <section className="home-section home-method" aria-label="Qué construimos">
        <article>
          <p className="label-caps text-brand-teal">01 · La gestión</p>
          <h2 className="display home-heading">De Excel a una gestión conectada.</h2>
          <p className="home-body">
            Reunimos registros, procesos y responsabilidades en un sistema diseñado
            para tu operación. La dirección puede ver qué ocurre, qué necesita
            atención y quién se ocupa de cada decisión.
          </p>
          <Link href="/servicios" className="link-quiet home-text-link">Cómo trabajamos <span aria-hidden="true">↗</span></Link>
        </article>
        <article>
          <p className="label-caps text-brand-teal">02 · La inteligencia artificial</p>
          <h2 className="display home-heading">IA dentro del trabajo.</h2>
          <p className="home-body">
            Consultar indicadores, clasificar un movimiento o preparar un borrador.
            Cada tarea usa el contexto y los permisos que le corresponden.
            Las personas autorizadas revisan y aprueban las acciones oficiales.
          </p>
          <Link href="/ia-gobernada" className="link-quiet home-text-link">Qué significa IA gobernada <span aria-hidden="true">↗</span></Link>
        </article>
      </section>

      <section className="teal-band home-proof" aria-labelledby="proof-title">
        <div className="home-section">
          <div className="home-proof-intro">
            <h2 id="proof-title" className="display home-heading">Experiencia desde la dirección.</h2>
            <p className="home-body">
              Construimos a partir de problemas que también gestionamos.
              Estos son dos ámbitos donde ya hemos aplicado ese trabajo.
            </p>
          </div>
          <div className="home-proof-grid">
            <article>
              <p className="label-caps">Educación · AENA</p>
              <p className="display home-metric">70% <span className="home-metric-arrow">→</span> <span className="num-signal">2,9%</span></p>
              <p className="home-body">Morosidad en AENA. Tres años de dirección directa.</p>
              <p className="home-proof-detail">Gestión escolar, cobros, planificación y coordinación en un mismo sistema.</p>
            </article>
            <article>
              <p className="label-caps">Organizaciones eclesiásticas · IPU Paraguay</p>
              <p className="display home-metric">~30 <span className="home-metric-unit">iglesias</span></p>
              <p className="home-body">Tesorería de IPU Paraguay.</p>
              <p className="home-proof-detail">Registros contables, revisión e informes para gestionar una red de iglesias.</p>
            </article>
          </div>
          <Link href="/casos" className="link-quiet home-text-link">Conocer los casos <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-section home-close" aria-labelledby="contact-title">
        <div>
          <p className="label-caps text-brand-teal">El primer paso</p>
          <h2 id="contact-title" className="display home-heading">¿Qué necesitas entender mejor?</h2>
          <p className="home-body">
            Cuéntanos qué información cuesta reunir y qué decisiones se frenan.
            Empezamos por entender tu operación y definir una primera prioridad.
          </p>
        </div>
        <Link href="/contacto" className="btn-primary">Hablemos de tu sistema</Link>
      </section>
    </>
  );
}
