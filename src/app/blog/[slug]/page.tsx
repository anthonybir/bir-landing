import type { Metadata } from 'next';
import Image from 'next/image';
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
    title: `${post.title} | ABN · Agencia Bir Núñez`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://bir.com.py/blog/${post.slug}`,
      type: 'article',
      images: post.lead.src,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pb-32 pt-24 md:px-8">
      {/* Header */}
      <header>
        <Link href="/blog" className="label-caps inline-block transition-colors hover:text-gray-900">
          ← Volver al blog
        </Link>
        <p className="label-caps mt-10">{post.tag}</p>
        <h1 className="display mt-4 text-[2.027rem] leading-[1.1] md:text-[2.488rem]">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs text-gray-500">
          <span>{post.institution}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.dateISO}>{post.dateLabel}</time>
          <span aria-hidden>·</span>
          <span>{post.readingLabel}</span>
        </div>
      </header>

      {/* Lead image */}
      <figure className="article-figure mt-12">
        <div className="card overflow-hidden p-2">
          <Image
            src={post.lead.src}
            alt={post.lead.alt}
            width={post.leadSize.width}
            height={post.leadSize.height}
            className="h-auto w-full rounded-[calc(var(--radius-lg)-0.25rem)]"
            sizes="(min-width: 768px) 720px, 100vw"
            priority
          />
        </div>
        <figcaption>{post.lead.alt}</figcaption>
      </figure>

      {/* Body */}
      <div className="mt-12">
        <Article body={post.body} />
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col items-start gap-6 border-t border-gray-200 pt-12">
        <p className="max-w-xl font-sans text-base text-gray-600">
          ¿Tu institución necesita ordenar lo que hoy depende de planillas y
          memoria personal? El primer paso es un diagnóstico, no un contrato.
        </p>
        <Link href="/contacto" className="btn-primary">
          Conversar sobre tu institución
        </Link>
      </div>
    </article>
  );
}
