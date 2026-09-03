import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aula',
  description:
    'Aula es el motor de planificación académica con IA de ABN. Una sola plataforma, propiedad de la agencia, desplegada por institución.',
  alternates: {
    canonical: '/aula',
  },
};

export default function AulaPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Plataforma</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">Aula.</h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          El motor de planificación académica con IA de ABN. Una sola plataforma,
          desplegada por institución. La IA prepara borradores. Una persona los
          revisa y aprueba.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <div className="shot">
          <div className="shot-chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="shot-body">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius-lg)-0.25rem)] bg-gray-100">
              <Image
                src="/blog/aula-calma-como-estructura/hub-llegada.png"
                alt="Planificación académica en Aula: una sola decisión a la vista, elegir el curso"
                fill
                priority
                sizes="(min-width: 768px) 72rem, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <p className="max-w-xl font-sans text-base leading-relaxed text-gray-600">
          AENA, IPU Paraguay e IBA usan la misma plataforma. Cada institución
          conserva sus propias reglas. No vendemos el software por separado.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/contacto" className="btn-primary">
            Agendar un diagnóstico
          </Link>
          <Link href="/casos" className="link-quiet font-sans text-base">
            Ver los casos
          </Link>
        </div>
      </section>
    </>
  );
}
