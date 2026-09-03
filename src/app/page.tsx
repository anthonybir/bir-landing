import type { Metadata } from 'next';
import Image from 'next/image';
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
        className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-x-clip"
        aria-label="Oferta"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="display display-poster settle">
              <span className="block">No tenés</span>
              <span className="block">
                <em>un sistema.</em>
              </span>
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

          {/* Real software answers the headline. The frame bleeds off the
              right edge; the progression grid rides its corner: order,
              arriving, and already in production. */}
          <div className="hero-stage settle settle-3 hidden lg:block">
            <div className="shot hero-shot">
              <div className="shot-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="shot-body">
                <Image
                  src="/screenshots/aena-centro-coordinacion-public.png"
                  alt="Centro de Coordinación de AENA Admin, el sistema escolar en producción"
                  width={1280}
                  height={960}
                  priority
                  sizes="(min-width: 1024px) 60vw, 0px"
                  className="aspect-[4/3] w-full rounded-[calc(var(--radius-lg)-0.25rem)] object-cover object-top"
                />
              </div>
            </div>
            <HeroGrid className="hero-grid-overlay" />
          </div>
        </div>
      </section>

      {/* Proof band: institutional expertise, in numbers. The one dark surface
          before the footer, and the one place the signal gold is spent. */}
      <section className="teal-band brand-texture band-rise" aria-label="Prueba">
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
          <p className="max-w-xl font-sans text-base leading-relaxed text-brand-cream-muted">
            Resultados de las instituciones que ABN opera hoy.
          </p>

          {/* The lead number carries the argument, so it gets the proof size.
              The two that follow are context, one step down. */}
          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            <div className="md:col-span-12 lg:col-span-6">
              <p className="display display-proof num-signal">
                70% → <AnimatedNumber from={70} to={2.9} decimals={1} suffix="%" />
              </p>
              <p className="label-caps mt-2">Morosidad recuperada</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                AENA, en tres años de dirección directa.
              </p>
            </div>

            <div className="md:col-span-6 lg:col-span-3">
              <p className="display display-num">
                ~<AnimatedNumber to={30} />
              </p>
              <p className="label-caps mt-2">Iglesias administradas</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-brand-cream-muted">
                Tesorería por partida doble, cierre mensual de un día.
              </p>
            </div>

            <div className="md:col-span-6 lg:col-span-3">
              <p className="display display-num">
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
            Empezamos con un diagnóstico. No hace falta firmar un contrato para eso.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
        </Reveal>
      </section>
    </>
  );
}
