import Link from 'next/link';
import { ArrowR, ArrowUR } from './Arrows';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppFloat';

export default function CTABanner() {
  return (
    <section className="cta-section px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-end gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
          <div>
            <span className="eyebrow mb-6 inline-flex">
              <span className="dot" />
              Contacto directo
            </span>
            <h2 className="editorial-display text-[clamp(2.5rem,7vw,6.5rem)]">
              Ordenar primero.
              <br />
              <span className="serif-it">Escalar después.</span>
            </h2>
            <p className="mt-8 max-w-[36rem] text-base leading-relaxed text-foreground/72 md:text-lg">
              Si ya sabés que Excel, WhatsApp y decisiones improvisadas no alcanzan, conversemos.
              ABN entra donde hace falta criterio, estructura y un sistema que siga funcionando
              cuando el entusiasmo inicial se vaya.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="tick">Respuesta habitual en 48h hábiles</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3.5 font-sans text-sm font-semibold text-foreground transition hover:-translate-y-px hover:bg-signal-light"
            >
              <WhatsAppIcon />
              Escribinos por WhatsApp
              <ArrowUR />
            </a>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3.5 font-sans text-sm font-medium text-foreground transition hover:-translate-y-px hover:bg-foreground hover:text-background"
            >
              Enviar mensaje
              <ArrowR />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
