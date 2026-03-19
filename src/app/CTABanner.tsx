import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppFloat';

export default function CTABanner() {
  return (
    <section className="cta-section px-6 md:px-12 py-16 bg-light-gray border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-4">
          ¿Necesitás transformar tu institución?
        </h2>
        <p className="font-sans text-foreground/70 mb-6 max-w-2xl mx-auto">
          Si ya sabés que Excel, WhatsApp y decisiones improvisadas no
          alcanzan, conversemos. Te ayudamos a ordenar primero y escalar
          después.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-sans inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-sm font-medium hover:bg-foreground/90"
          >
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
          <a
            href="/#contacto"
            className="btn-outline font-sans inline-flex items-center justify-center gap-2 text-sm font-medium border-2 border-[#1A1A1A] px-8 py-4 rounded-sm hover:bg-foreground hover:text-background"
          >
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
