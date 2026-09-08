'use client';

import { useEffect } from 'react';
import { SITE_DESCRIPTION } from './site-information';

const PUBLIC_PAGES = {
  inicio: '/',
  servicios: '/servicios',
  aula: '/aula',
  relocation: '/en',
  ia_gobernada: '/ia-gobernada',
  casos: '/casos',
  blog: '/blog',
  nosotros: '/nosotros',
  contacto: '/contacto',
} as const;

type PublicPage = keyof typeof PUBLIC_PAGES;

const pageNames: PublicPage[] = [
  'inicio',
  'servicios',
  'aula',
  'relocation',
  'ia_gobernada',
  'casos',
  'blog',
  'nosotros',
  'contacto',
];

function isPublicPage(page: string): page is PublicPage {
  return Object.hasOwn(PUBLIC_PAGES, page);
}

/**
 * Exposes a small, public browser-agent surface when Chrome provides WebMCP.
 * Unsupported browsers do not receive a polyfill or any changed behavior.
 */
export default function WebMCPTools() {
  useEffect(() => {
    const modelContext = document.modelContext;

    if (!modelContext) {
      return;
    }

    const controller = new AbortController();
    const register = async () => {
      await modelContext.registerTool(
        {
          name: 'get_anthony_bir_site_information',
          description:
            'Get public information about Anthony Bir, his career, affiliations, location, and contact channels. Use this before deciding which public page to open.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          execute: () => ({
            name: 'Anthony Bir',
            description: SITE_DESCRIPTION,
            affiliation: { name: 'ABN · Agencia Bir Núñez', role: 'Fundador', page: '/servicios' },
            location: 'Lambaré, Paraguay',
            contact: {
              email: 'anthony@bir.com.py',
              contactPage: '/#contacto',
            },
            pages: PUBLIC_PAGES,
          }),
          annotations: { readOnlyHint: true },
        },
        { signal: controller.signal },
      );

      await modelContext.registerTool(
        {
          name: 'navigate_anthony_bir_site',
          description:
            'Navigate to a public page on Anthony Bir’s site. The contacto page contains the ABN enquiry form. This does not submit a form or send a message.',
          inputSchema: {
            type: 'object',
            properties: {
              page: {
                type: 'string',
                enum: pageNames,
                description: 'The public page to open.',
              },
            },
            required: ['page'],
            additionalProperties: false,
          },
          execute: ({ page }) => {
            if (typeof page !== 'string' || !isPublicPage(page)) {
              throw new Error('Invalid public page.');
            }

            const destination = PUBLIC_PAGES[page];
            window.location.assign(destination);
            return { navigatedTo: destination };
          },
        },
        { signal: controller.signal },
      );
    };

    void register().catch((error: unknown) => {
      if (!controller.signal.aborted) {
        console.warn('WebMCP tools could not register.', error);
      }
    });

    return () => controller.abort();
  }, []);

  return null;
}
