import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/blog/posts';
import { PageIntro } from '../PageLayout';
import { pageMetadata } from '../page-metadata';

export const metadata = pageMetadata('Blog', 'Notas de Anthony Bir sobre gestión, diseño de sistemas e IA: qué hicimos, qué aprendimos y por qué.', '/blog');

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageIntro label="Blog" title="Notas de mi trabajo.">
        <p>Aquí escribo sobre gestión, diseño y uso de IA en los sistemas que construyo. Cada nota cuenta el trabajo y las decisiones de su fecha de publicación.</p>
      </PageIntro>
      {/* Posts */}
      <section className="page-container page-section" aria-label="Publicaciones">
        <div className="journal-list">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="journal-entry"
              aria-labelledby={`post-${p.slug}`}
            >
              <Image src={p.lead.src} alt={p.lead.alt} width={p.leadSize.width} height={p.leadSize.height} className="journal-entry-image" sizes="(min-width: 900px) 480px, 100vw" />
              <div className="min-w-0">
                <p className="label-caps">{p.tag}</p>
                <h2 id={`post-${p.slug}`} className="text-gray-900">{p.title}</h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-gray-600">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-6 font-sans text-xs text-gray-600">
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
