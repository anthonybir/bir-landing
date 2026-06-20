import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pngSize, type Size } from '@/lib/pngSize';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date for <time> / sorting. */
  dateISO: string;
  /** Section voice for the listing + header chip. */
  tag: string;
  /** Public institution this post is about. */
  institution: string;
  /** Lead image shown in the header and listing card. */
  lead: { src: string; alt: string };
};

export type Post = PostMeta & {
  body: string;
  dateLabel: string;
  readingLabel: string;
  leadSize: Size;
};

/** Single source of truth for published posts (newest first). */
const POSTS: readonly PostMeta[] = [
  {
    slug: 'aula-calma-como-estructura',
    title: 'La calma como estructura: cómo rediseñamos la planificación en Aula',
    description:
      'Rediseñamos por completo la planificación de Aula con una idea: la calma es estructura. Menos ruido, una ruta visible del plan anual al paquete semanal, y una sola fuente de verdad para docentes y dirección.',
    dateISO: '2026-06-20',
    tag: 'Diseño · Producto',
    institution: 'AENA · Nuevas Alturas',
    lead: {
      src: '/blog/aula-calma-como-estructura/hub-llegada.png',
      alt: 'El panel de planificación de Aula abre con una sola decisión a la vista, elegir el curso, y una ruta clara del plan anual al paquete semanal.',
    },
  },
  {
    slug: 'ia-administracion-fiel',
    title: 'Inteligencia artificial al servicio de la administración fiel',
    description:
      'Cómo la tesorería de IPUPY incorpora IA sin debilitar la transparencia: cuatro principios escritos en el código mismo del sistema.',
    dateISO: '2026-06-12',
    tag: 'Tesorería · IA responsable',
    institution: 'IPUPY',
    lead: {
      src: '/blog/ia-administracion-fiel/ai-governance.png',
      alt: 'Panel de servicios de IA del sistema de tesorería: cada servicio con su versión de instrucciones, su tasa de éxito y su confianza promedio.',
    },
  },
  {
    slug: 'ia-aula-planificacion-docente',
    title:
      'IA al servicio del aula: cómo planifican nuestros docentes con inteligencia artificial',
    description:
      'Aula, nuestra plataforma educativa, suma IA al módulo de planificación con una regla firme: la IA propone, el docente decide.',
    dateISO: '2026-06-10',
    tag: 'Educación · IA responsable',
    institution: 'AENA · Nuevas Alturas',
    lead: {
      src: '/blog/ia-aula-planificacion-docente/hub-docente.png',
      alt: 'El panel de planificación de Aula organiza el trabajo del docente en una ruta clara: del plan anual al borrador semanal con IA.',
    },
  },
] as const;

const MONTHS_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

function formatDateES(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} de ${MONTHS_ES[m - 1]} de ${y}`;
}

function readBody(slug: string): string {
  const file = path.join(process.cwd(), 'content', 'blog', 'published', `${slug}.md`);
  return readFileSync(file, 'utf8').trim();
}

function readingLabel(body: string): string {
  const words = body.replace(/[#>*_`!\[\]()/-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min de lectura`;
}

function hydrate(meta: PostMeta): Post {
  const body = readBody(meta.slug);
  return {
    ...meta,
    body,
    dateLabel: formatDateES(meta.dateISO),
    readingLabel: readingLabel(body),
    leadSize: pngSize(meta.lead.src),
  };
}

export function getAllPosts(): Post[] {
  return [...POSTS]
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
    .map(hydrate);
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  const meta = POSTS.find((p) => p.slug === slug);
  return meta ? hydrate(meta) : null;
}
