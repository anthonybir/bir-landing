import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[60dvh] flex-col justify-center py-16">
      <p className="label-caps mb-6">404</p>
      <h1 className="display display-hero max-w-3xl">No encontramos esta página.</h1>
      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
        Puede que el enlace haya cambiado. Puedes volver al inicio para encontrar lo que buscas.
      </p>
      <Link href="/" className="btn-primary mt-12 w-fit">
        Volver al inicio
      </Link>
    </section>
  );
}
