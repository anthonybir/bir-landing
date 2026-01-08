import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

type ContactPayload = {
  nombre?: string;
  email?: string;
  organizacion?: string;
  mensaje?: string;
  website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

// Input length limits
const MAX_LENGTH = {
  nombre: 100,
  email: 254,
  organizacion: 200,
  mensaje: 5000,
};

export async function POST(request: Request) {
  // Rate limiting check
  const headersList = await headers();
  const clientIp = getClientIp(headersList);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Por favor, intente más tarde.' },
      { status: 429 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 });
  }

  const nombre = payload.nombre?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const organizacion = payload.organizacion?.trim() ?? '';
  const mensaje = payload.mensaje?.trim() ?? '';
  const website = payload.website?.trim() ?? '';

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Correo electrónico inválido.' }, { status: 400 });
  }

  // Input length validation
  if (
    nombre.length > MAX_LENGTH.nombre ||
    email.length > MAX_LENGTH.email ||
    organizacion.length > MAX_LENGTH.organizacion ||
    mensaje.length > MAX_LENGTH.mensaje
  ) {
    return NextResponse.json({ error: 'Datos demasiado largos.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || 'onboarding@resend.dev';
  const subject = process.env.CONTACT_SUBJECT || 'Nuevo contacto desde bir.com.py';

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: 'Falta configuración de correo (RESEND_API_KEY, CONTACT_TO).' },
      { status: 500 }
    );
  }

  const html = `
    <h2>Nuevo contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organización:</strong> ${escapeHtml(organizacion || '-')}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replace(/\n/g, '<br />')}</p>
  `;

  const text = `Nuevo contacto\n\nNombre: ${nombre}\nEmail: ${email}\nOrganización: ${organizacion || '-'}\n\nMensaje:\n${mensaje}`;

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
      return NextResponse.json({ error: errorBody || 'Error enviando email.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Error enviando email.' }, { status: 502 });
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
