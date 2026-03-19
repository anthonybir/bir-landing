import type { Metadata } from 'next';
import CTABanner from '../CTABanner';

export const metadata: Metadata = {
  title: 'Nosotros | ABN — Agencia Bir Nuñez',
  description: 'Conocé a la Junta Directiva de ABN. Experiencia corporativa internacional, misiones globales y pedagogía institucional al servicio de Latinoamérica.',
};

export default function NosotrosPage() {
  return (
    <>
      {/* Narrative — Quiénes Somos */}
      <section className="px-6 md:px-12 pt-24 pb-16 md:pt-32 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Quiénes Somos
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl line-accent">
              Una agencia con raíces profundas
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
              <p>
                ABN nace de la convergencia de trayectorias: experiencia corporativa
                internacional, cuatro décadas de servicio misionero y educativo en
                Sudamérica, y la visión compartida de una familia comprometida con
                el desarrollo institucional.
              </p>
              <p>
                Trabajamos con instituciones que entienden que la excelencia operativa
                y los valores humanos no son opuestos, sino complementarios.
              </p>
            </div>
            <div className="font-sans text-foreground/70 leading-relaxed space-y-4">
              <p>
                Cada sistema que ofrecemos lo usamos nosotros primero. AENA Admin
                gestiona nuestra propia institución educativa con la plataforma
                AULA — el motor de IA que genera planes y materiales bajo nuestro
                criterio institucional, no el de ChatGPT. IBA Paraguay opera
                como ERP académico para seminarios, e IPUPY Tesorería administra
                las finanzas de nuestra organización eclesiástica.
              </p>
              <p className="text-foreground font-medium">
                Creemos que la IA funciona cuando la institución le pone los límites.
                Lo probamos en nuestra propia realidad todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-sans text-sm tracking-widest text-accent mb-4 uppercase">
              Junta Directiva
            </p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl line-accent">
              Liderazgo con experiencia global
            </h2>
          </div>

          {/* Anthony — Distinguished Founder Card */}
          <div className="bg-foreground text-background p-8 md:p-12 rounded-sm mb-8">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-background rounded-sm flex items-center justify-center mx-auto md:mx-0 team-avatar">
                <span className="text-foreground font-sans font-semibold text-3xl md:text-4xl">AB</span>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-2">Cofundador & Socio Director</p>
                <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">Anthony Bir</h3>
                <p className="font-sans text-background/70 leading-relaxed max-w-3xl">
                  Experiencia en ventas de exportación en Heinz, ventas de proyectos
                  e implementación SAP en Kontron AG, y liderazgo de proyectos
                  internacionales en Thermo Fisher Scientific, con contribuciones
                  significativas al proyecto KAUST en Jeddah, Arabia Saudita. Arquitecto
                  de los sistemas AENA Admin e IPUPY — las plataformas que ABN opera
                  y ofrece a instituciones educativas y eclesiásticas en Latinoamérica.
                </p>
              </div>
            </div>
          </div>

          {/* Partners — 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Joseph Bir */}
            <div className="bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-6 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">JB</span>
              </div>
              <div className="text-center mb-4">
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-1">Cofundador & Socio</p>
                <h3 className="font-sans font-semibold text-xl">Joseph Bir</h3>
              </div>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                Cofundador de ABN. Licenciatura en Teología del Texas Bible
                College (TBC). 40 años de experiencia en Misiones Globales
                de la UPCI. Misionero principal en Paraguay y Perú. Líder GATS
                en Sudamérica y Coordinador de Área de la UPCI en múltiples
                zonas del continente.
              </p>
            </div>

            {/* Loretta Bir */}
            <div className="bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-6 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">LB</span>
              </div>
              <div className="text-center mb-4">
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-1">Socia</p>
                <h3 className="font-sans font-semibold text-xl">Loretta Bir</h3>
              </div>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                Licenciatura en Educación Cristiana del Texas Bible College (TBC).
                Líder GATS en IBA Paraguay. Fundadora de la escuela K-12 en
                Lambaré, Asociación Educativa Nuevas Alturas — la institución
                que originó los sistemas que hoy ABN ofrece al mercado.
              </p>
            </div>

            {/* Diana Nunez */}
            <div className="bg-background p-8 rounded-sm border border-[#1A1A1A]/10">
              <div className="w-20 h-20 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-6 team-avatar">
                <span className="text-background font-sans font-semibold text-2xl">DN</span>
              </div>
              <div className="text-center mb-4">
                <p className="font-sans text-xs tracking-widest text-accent uppercase mb-1">Socia</p>
                <h3 className="font-sans font-semibold text-xl">Diana Nunez</h3>
              </div>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                Maestría en Gestión Educativa (UNAES). Más de 20 años de experiencia
                en pedagogía de escuelas privadas. Diseña la línea pedagógica
                institucional que alimenta la plataforma AULA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
