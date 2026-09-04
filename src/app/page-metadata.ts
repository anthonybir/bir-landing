import type { Metadata } from 'next';

/** Route metadata stays together so social previews cannot inherit the home description. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ABN · Agencia Bir Núñez`,
      description,
      url: path,
      locale: 'es_ES',
      type: 'website',
      images: '/opengraph-image',
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  };
}
