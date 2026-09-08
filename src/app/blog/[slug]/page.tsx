import type { Metadata } from 'next';
import JsonLd from '../../JsonLd';
import { absoluteUrl, PERSON_ID } from '../../site-information';
import ProductFigure from '../../ProductFigure';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Article from '../_components/Article';
import { getPostBySlug, getPostSlugs } from '@/blog/posts';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: post.lead.src },
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: 'article',
      locale: 'es_ES',
      publishedTime: post.dateISO,
      authors: [absoluteUrl('/historia')],
      images: post.lead.src,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    url: postUrl,
    headline: post.title,
    description: post.description,
    datePublished: post.dateISO,
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Anthony Bir',
      url: absoluteUrl('/historia'),
    },
    publisher: { '@type': 'Person', '@id': PERSON_ID, name: 'Anthony Bir', url: absoluteUrl('/historia') },
    mainEntityOfPage: postUrl,
    inLanguage: 'es-ES',
    image: absoluteUrl(post.lead.src),
  } as const;

  return (
    <article className="article-shell">
      <JsonLd data={blogPostingJsonLd} />
      {/* Header */}
      <header>
        <Link href="/blog" className="label-caps inline-block transition-colors hover:text-gray-900">
          ← Volver al blog
        </Link>
        <p className="label-caps mt-10">{post.tag}</p>
        <h1 className="display article-title mt-4">
          {post.title}
        </h1>
        <p className="body-copy mt-6">{post.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2 font-sans text-xs text-gray-600">
          <Link href="/historia" rel="author" className="link-quiet">Anthony Bir</Link>
          <span aria-hidden>·</span>
          <span>{post.institution}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.dateISO}>{post.dateLabel}</time>
          <span aria-hidden>·</span>
          <span>{post.readingLabel}</span>
        </div>
      </header>

      <ProductFigure src={post.lead.src} alt={post.lead.alt} width={post.leadSize.width} height={post.leadSize.height} sizes="(min-width: 800px) 736px, 100vw" priority />
      {post.institution.startsWith('AENA') && <p className="body-copy text-sm">En esta nota, «Aula» se refiere al entorno de planificación de AENA.</p>}

      {/* Body */}
      <div className="mt-12">
        <Article body={post.body} />
      </div>

      {/* CTA */}
      <div className="mt-16 flex flex-col items-start gap-6">
        <p className="max-w-xl font-sans text-base text-gray-600">
          Si te encuentras con un problema parecido en tu organización,
          cuéntame cómo lo estás resolviendo.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/contacto" className="btn-primary">Escríbeme</Link>
          <Link href="/blog" className="link-quiet">Volver a las notas</Link>
        </div>
      </div>
    </article>
  );
}
