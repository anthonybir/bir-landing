'use client';

import { useEffect } from 'react';

const PUBLIC_PAGES = {
  inicio: '/',
  servicios: '/servicios',
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
          name: 'get_abn_site_information',
          description:
            'Get public information about ABN Agencia Bir Núñez, its service areas, location, and contact channels. Use this before deciding which public page to open.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          execute: () => ({
            name: 'ABN · Agencia Bir Núñez',
            description:
              'ABN rehabilitates institutions through governed systems for education and church organizations.',
            location: 'Lambaré, Paraguay',
            serviceArea: 'Paraguay and the region',
            contact: {
              email: 'anthony@bir.com.py',
              contactPage: '/contacto',
              responseTime: 'Within 48 business hours',
            },
            pages: PUBLIC_PAGES,
          }),
          annotations: { readOnlyHint: true },
        },
        { signal: controller.signal },
      );

      await modelContext.registerTool(
        {
          name: 'navigate_abn_site',
          description:
            'Navigate to a public ABN page. Use contacto when the visitor wants to start a conversation. This does not submit a form or send a message.',
          inputSchema: {
            type: 'object',
            properties: {
              page: {
                type: 'string',
                enum: pageNames,
                description: 'The public ABN page to open.',
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
