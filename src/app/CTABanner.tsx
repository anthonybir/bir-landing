import Link from 'next/link';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppFloat';

export default function CTABanner() {
  return (
    <section className="cta-section px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.35fr_0.85fr] md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">Contacto directo</p>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
              Ordenar primero. Escalar después.
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-foreground/68 md:text-lg">
              Si ya sabés que Excel, WhatsApp y decisiones improvisadas no alcanzan,
              conversemos. ABN entra donde hace falta criterio, estructura y un sistema
              que siga funcionando cuando el entusiasmo inicial se vaya.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-start">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground/40">
              Respuesta habitual en 48 horas hábiles
            </p>
            <div className="flex w-full flex-col gap-4 sm:flex-row md:flex-col">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 font-sans text-sm font-medium text-background hover:bg-foreground/90"
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
          <Link
            href="/#contacto"
            className="btn-outline inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 py-4 font-sans text-sm font-medium text-foreground hover:bg-foreground hover:text-background"
          >
            Enviar mensaje
          </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
