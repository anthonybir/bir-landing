import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 py-24 md:px-8">
      <p className="label-caps mb-6">404</p>
      <h1 className="display display-hero max-w-3xl">Esta página no existe.</h1>
      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
        El enlace está roto o la página se movió.
      </p>
      <Link href="/" className="btn-primary mt-12 w-fit">
        Volver al inicio
      </Link>
    </section>
  );
}
