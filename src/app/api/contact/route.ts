import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { z } from 'zod';

const ContactSchema = z.object({
  nombre: z
    .string({ error: 'El nombre es obligatorio.' })
    .trim()
    .min(1, 'El nombre es obligatorio.')
    .max(100, 'El nombre es demasiado largo.'),
  email: z
    .email({ error: 'Correo electrónico inválido.' })
    .max(254, 'El correo es demasiado largo.'),
  organizacion: z
    .string()
    .trim()
    .max(200, 'La organización es demasiado larga.')
    .optional(),
  tipoInstitucion: z
    .string()
    .trim()
    .max(200, 'El tipo de institución es demasiado largo.')
    .optional(),
  mensaje: z
    .string({ error: 'El mensaje es obligatorio.' })
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(3000, 'El mensaje es demasiado largo.'),
  website: z.string().trim().optional(),
});

// Rate limiting configuration
const RATE_LIMIT_MAX = 5; // Max requests
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// In-memory store for rate limiting (per serverless instance)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIp(headersList: Headers): string {
  return (
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: Request) {
  // Rate limiting check
  const headersList = await headers();
  const clientIp = getClientIp(headersList);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Por favor, intentá de nuevo más tarde.' },
      { status: 429 }
    );
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  // Honeypot short-circuit: bots that fill the hidden field get a silent
  // success without any validation feedback that could help them adapt.
  const rawWebsite =
    typeof json === 'object' && json !== null && 'website' in json
      ? String((json as Record<string, unknown>).website ?? '').trim()
      : '';

  if (rawWebsite) {
    return NextResponse.json({ ok: true });
  }

  const parsed = ContactSchema.safeParse(json);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? 'Datos inválidos.';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { nombre, email, organizacion, tipoInstitucion, mensaje } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || 'onboarding@resend.dev';
  const subject = process.env.CONTACT_SUBJECT || 'Nuevo contacto desde bir.com.py';

  if (!apiKey || !to) {
    console.error('Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO.');
    return NextResponse.json(
      { error: 'No se pudo enviar el mensaje. Intentá de nuevo más tarde.' },
      { status: 500 }
    );
  }

  const html = `
    <h2>Nuevo contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organización:</strong> ${escapeHtml(organizacion || '-')}</p>
    <p><strong>Tipo de institución:</strong> ${escapeHtml(tipoInstitucion || '-')}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, '<br />')}</p>
  `;

  const text = `Nuevo contacto\n\nNombre: ${nombre}\nEmail: ${email}\nOrganización: ${organizacion || '-'}\nTipo de institución: ${tipoInstitucion || '-'}\n\nMensaje:\n${mensaje}`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Resend error:', response.status, errorBody);
      return NextResponse.json({ error: 'No se pudo enviar el mensaje.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'No se pudo enviar el mensaje.' }, { status: 502 });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
