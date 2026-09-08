import type { Metadata } from 'next';
import { absoluteUrl } from './site-information';

/** One canonical and preview contract; service pages identify ABN explicitly. */
export function pageMetadata(title: string, description: string, path: string, brand: 'Anthony Bir' | 'ABN' = 'Anthony Bir'): Metadata {
  const fullTitle = `${title} | ${brand}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: 'Anthony Bir',
      locale: 'es_ES',
      type: 'website',
      images: absoluteUrl('/opengraph-image'),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [absoluteUrl('/opengraph-image')] },
  };
}
