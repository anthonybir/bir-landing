/** Shared public positioning for metadata and browser-agent discovery. */
export const SITE_TITLE = 'Anthony Bir · Dirección, tesorería y sistemas';
export const SITE_DESCRIPTION =
  'Anthony Bir dirige un colegio, lleva la tesorería de una red de iglesias en Paraguay y construye los sistemas que usan en el trabajo diario.';

export const PROVEN_SECTORS = ['Educación', 'Organizaciones eclesiásticas'] as const;

export const CAREER = [
  { date: '2005 a 2006', organization: 'HJ Heinz', role: 'Coordinador de ventas de exportación' },
  { date: '2007 a 2011', organization: 'Thermo Fisher Scientific', role: 'Líder de proyectos internacionales' },
  { date: '2012 a 2019', organization: 'Empresa propia de logística', role: 'Propietario y gerente general' },
  { date: 'Desde 2020', organization: 'AENA · Nuevas Alturas', role: 'Presidente del Consejo Administrativo' },
] as const;

export const PUBLIC_PAGES = {
  inicio: '/',
  historia: '/historia',
  servicios: '/servicios',
  aula: '/aula',
  relocation: '/en',
  ia_gobernada: '/ia-gobernada',
  casos: '/casos',
  blog: '/blog',
  nosotros: '/nosotros',
  contacto: '/contacto',
} as const;
