import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP_URL } from './WhatsAppFloat';

export const metadata: Metadata = {
  title: { absolute: 'ABN · Te construimos el sistema' },
  description:
    'Tu institución no tiene un sistema. ABN lo construye: administración educativa, financiera y legal, bajo una sola dirección.',
  alternates: {
    canonical: '/',
  },
};

const proof = [
  {
    num: '70% → 2,9%',
    label: 'Morosidad recuperada',
    note: 'AENA, en tres años de dirección directa.',
  },
  {
    num: '~30',
    label: 'Iglesias administradas',
    note: 'Tesorería por partida doble, cierre mensual de un día.',
  },
  {
    num: '3',
    label: 'Sistemas en producción',
    note: 'Escolar, financiero y editorial, operando hoy.',
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section
        className="flex min-h-[calc(100dvh-4rem)] flex-col justify-center"
        aria-label="Oferta"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8">
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
      </section>

      {/* Proof band: institutional expertise, in numbers. Quiet by design. */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-8" aria-label="Prueba">
        <p className="max-w-xl border-t border-gray-200 pt-12 font-sans text-base leading-relaxed text-gray-600">
          Primero ordenamos la institución. El sistema que queda es la prueba.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-16">
          {proof.map((p) => (
            <div key={p.label}>
              <p className="display text-[1.777rem]">{p.num}</p>
              <p className="label-caps mt-2">{p.label}</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">
                {p.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-sans text-base">
          <Link href="/casos" className="link-quiet">
            Ver los tres casos
          </Link>
        </p>
      </section>
    </>
  );
}
