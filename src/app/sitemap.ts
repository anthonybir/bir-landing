import { MetadataRoute } from 'next';
import { getAllPosts } from '@/blog/posts';

const BASE = 'https://bir.com.py';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number }> = [
    { path: '', priority: 1 },
    { path: '/servicios', priority: 0.9 },
    { path: '/casos', priority: 0.9 },
    { path: '/blog', priority: 0.8 },
    { path: '/nosotros', priority: 0.7 },
    { path: '/contacto', priority: 0.8 },
    { path: '/en', priority: 0.8 },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
