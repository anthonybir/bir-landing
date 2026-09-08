import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/blog/posts';
import { absoluteUrl, PUBLIC_PAGES } from './site-information';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.values(PUBLIC_PAGES).map(path => ({ url: absoluteUrl(path) })),
    ...getAllPosts().map(post => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.dateISO),
    })),
  ];
}
