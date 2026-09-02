import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';
import HeroGrid from './HeroGrid';
import Reveal from './Reveal';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: { absolute: 'ABN · Te construimos el sistema' },
  description:
    'Tu institución no tiene un sistema. ABN lo construye: administración educativa, financiera y legal, bajo una sola dirección.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <section
        className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center"
        aria-label="Oferta"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 py-16 xl:grid-cols-[1.25fr_0.75fr] md:px-8">
          <div>
            <h1 className="display display-poster settle">
              <span className="block">No tenés</span>
              <span className="block">un sistema.</span>
            </h1>
            <p className="settle settle-2 mt-8 font-sans text-base font-medium leading-relaxed text-gray-900">
              Te lo construimos.
            </p>
            <p className="label-caps settle settle-3 mt-4">Educación · Finanzas · Derecho</p>
            <div className="settle settle-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/contacto" className="btn-primary">
                Agendar un diagnóstico
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet font-sans text-base"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>

          {/* The progression grid answers the headline: order, arriving. */}
          <HeroGrid className="hidden xl:block" />
        </div>
      </section>

      {/* Proof band: institutional expertise, in numbers. The one dark surface
          before the footer, and the one place the signal gold is spent. */}
      <section className="teal-band brand-texture band-rise" aria-label="Prueba">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
          <p className="max-w-xl font-sans text-base leading-relaxed text-brand-cream-muted">
            Primero ordenamos la institución. El sistema que queda es la prueba.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-16">
            <div>
              <p className="display num-signal text-[1.777rem]">
                70% → <AnimatedNumber from={70} to={2.9} decimals={1} suffix="%" />
              </p>
              <p className="label-caps mt-2">Morosidad recuperada</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                AENA, en tres años de dirección directa.
              </p>
            </div>

            <div>
              <p className="display text-[1.777rem]">
                ~<AnimatedNumber to={30} />
              </p>
              <p className="label-caps mt-2">Iglesias administradas</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                Tesorería por partida doble, cierre mensual de un día.
              </p>
            </div>

            <div>
              <p className="display text-[1.777rem]">
                <AnimatedNumber to={3} />
              </p>
              <p className="label-caps mt-2">Sistemas en producción</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                Escolar, financiero y editorial, operando hoy.
              </p>
            </div>
          </div>

          <p className="mt-16 font-sans text-base">
            <Link href="/casos" className="link-quiet">
              Ver los tres casos
            </Link>
          </p>
        </div>
      </section>

      {/* Close: cream again, so the footer band reads as an anchor and not as
          a continuation of the proof band. */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-8" aria-label="Contacto">
        <Reveal className="flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
          <p className="max-w-xl font-sans text-base leading-relaxed text-gray-600">
            El primer paso es un diagnóstico, no un contrato.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </Reveal>
      </section>
    </>
  );
}
