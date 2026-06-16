import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/blog/posts';

export const metadata: Metadata = {
  title: 'Blog | ABN · Agencia Bir Núñez',
  description:
    'Notas sobre los sistemas que ABN diseña y opera: IA responsable, administración transparente y tecnología institucional, verificadas contra el código real.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 md:px-8">
        <p className="label-caps settle mb-6">Blog</p>
        <h1 className="display display-hero settle settle-2 max-w-3xl">
          Cómo construimos, por dentro.
        </h1>
        <p className="settle settle-3 mt-8 max-w-xl font-sans text-base leading-relaxed text-gray-600">
          Notas sobre los sistemas que diseñamos y operamos. Cada afirmación
          está verificada contra el código real. Sin caja negra.
        </p>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8" aria-label="Publicaciones">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card card-lift group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gray-200 bg-gray-100">
                <Image
                  src={p.lead.src}
                  alt={p.lead.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="label-caps">{p.tag}</p>
                <h2 className="display mt-3 text-[1.5rem] leading-tight">{p.title}</h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 font-mono text-xs text-gray-500">
                  <time dateTime={p.dateISO}>{p.dateLabel}</time>
                  <span aria-hidden>·</span>
                  <span>{p.readingLabel}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
