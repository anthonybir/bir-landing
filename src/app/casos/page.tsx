import type { Metadata } from 'next';
import Image from 'next/image';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Casos | ABN — Agencia Bir Nuñez',
  description: 'AENA Admin: sistema de gestión escolar con IA. IPUPY Tesorería: plataforma financiera para organizaciones eclesiásticas. Sistemas en producción en Paraguay.',
};

export default function CasosPage() {
  return (
    <>
      {/* Cases Header */}
      <section className="px-6 md:px-12 pt-24 pb-8 md:pt-32 md:pb-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
            Casos Reales
          </p>
          <h1 className="font-serif font-bold text-3xl md:text-5xl line-accent">
            Sistemas que construimos y usamos
          </h1>
        </div>
      </section>

      {/* AENA Case */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="scroll-reveal-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                  <span className="text-background font-sans font-semibold text-xl">A</span>
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-xl">AENA Admin</h2>
                  <p className="font-sans text-sm text-foreground/60">Sistema de Gestión Escolar</p>
                </div>
              </div>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Plataforma integral para administración escolar: matrículas,
                calificaciones, asistencia, gestión docente, y reportes al MEC
                — con un motor de IA que genera materiales bajo el estándar institucional, no al criterio individual de cada docente.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  En producción desde 2024
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Generación de materiales semanales con IA
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Alineado al programa oficial del MEC Paraguay
                </li>
              </ul>
              <a href="/#contacto" className="link-arrow font-sans text-sm font-medium text-accent mt-6 hover:underline">
                Consultá sobre AENA Admin
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="scroll-reveal-right rounded-lg overflow-hidden shadow-xl border border-[#1A1A1A]/10">
              <div className="browser-chrome">
                <div className="dot" /><div className="dot" /><div className="dot" />
              </div>
              <Image
                src="/screenshots/aena-dashboard.png"
                alt="AENA Admin — Dashboard con asistencia por grado"
                width={2842}
                height={1794}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* IPUPY Case */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 stat-card rounded-sm flex items-center justify-center">
                  <span className="text-background font-sans font-semibold text-xl">I</span>
                </div>
                <div>
                  <h2 className="font-sans font-semibold text-xl">IPUPY Tesorería</h2>
                  <p className="font-sans text-sm text-foreground/60">Sistema de Gestión Financiera</p>
                </div>
              </div>
              <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                Plataforma de tesorería para organización eclesiástica:
                control de ingresos/egresos, reportes financieros,
                gestión de múltiples congregaciones, y auditoría transparente.
              </p>
              <ul className="font-sans text-sm space-y-2 text-foreground/60">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  En producción desde 2024
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rendición de cuentas multi-nivel
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gobernanza eclesiástica transparente
                </li>
              </ul>
              <a href="/#contacto" className="link-arrow font-sans text-sm font-medium text-accent mt-6 hover:underline">
                Consultá sobre IPUPY
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="scroll-reveal-left rounded-lg overflow-hidden shadow-xl border border-[#1A1A1A]/10 md:order-1">
              <div className="browser-chrome">
                <div className="dot" /><div className="dot" /><div className="dot" />
              </div>
              <Image
                src="/screenshots/ipupy-dashboard.png"
                alt="IPUPY Tesorería — Dashboard financiero con ingresos y métricas"
                width={2846}
                height={1822}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
