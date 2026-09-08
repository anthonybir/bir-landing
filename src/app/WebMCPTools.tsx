'use client';

import { useEffect } from 'react';
import { CAREER, PUBLIC_PAGES, SITE_DESCRIPTION } from './site-information';

type PublicPage = keyof typeof PUBLIC_PAGES;

const pageNames = Object.keys(PUBLIC_PAGES) as PublicPage[];

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
            'Obtiene información pública sobre Anthony Bir, su trayectoria, trabajo actual, afiliaciones y canales de contacto. Úsala antes de decidir qué página pública abrir.',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false,
          },
          execute: () => ({
            name: 'Anthony Bir',
            description: SITE_DESCRIPTION,
            currentWork: [
              { organization: 'AENA · Nuevas Alturas', role: 'Presidente del Consejo Administrativo' },
              { organization: 'IPU Paraguay', role: 'Tesorero' },
            ],
            career: CAREER,
            affiliation: {
              name: 'ABN · Agencia Bir Núñez',
              role: 'Fundador',
              relationship: 'Afiliación y servicios para organizaciones',
              page: '/servicios',
            },
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
            'Navega a una página pública del sitio de Anthony Bir. La página contacto contiene el formulario de consulta de ABN. Esta herramienta no envía formularios ni mensajes.',
          inputSchema: {
            type: 'object',
            properties: {
              page: {
                type: 'string',
                enum: pageNames,
                description: 'Página pública que se abrirá.',
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
