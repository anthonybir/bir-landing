'use client';

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';

import { ContactSchema, CONTACT_RETRY_MESSAGE } from '@/lib/contact';

interface FormData {
  nombre: string;
  email: string;
  organizacion: string;
  tipoInstitucion: string;
  mensaje: string;
  website: string; // honeypot
}

type FieldName = keyof FormData;
type FieldErrors = Partial<Record<FieldName, string>>;

const INITIAL: FormData = {
  nombre: '',
  email: '',
  organizacion: '',
  tipoInstitucion: '',
  mensaje: '',
  website: '',
};

function validate(data: FormData): FieldErrors {
  const parsed = ContactSchema.safeParse(data);
  if (parsed.success) return {};
  const errors: FieldErrors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as FieldName;
    if (!errors[field]) errors[field] = issue.message;
  }
  return errors;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const inFlight = useRef(false);
  const lastSubmission = useRef<{ payload: string; id: string } | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (submitted) successRef.current?.focus(); }, [submitted]);

  const nombreRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mensajeRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name as FieldName];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;
    setSubmitError(null);

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      if (errors.nombre) {
        nombreRef.current?.focus();
      } else if (errors.email) {
        emailRef.current?.focus();
      } else if (errors.mensaje) {
        mensajeRef.current?.focus();
      }
      return;
    }

    setFieldErrors({});
    inFlight.current = true;
    setSubmitting(true);
    const payload = JSON.stringify(ContactSchema.parse(formData));
    if (lastSubmission.current?.payload !== payload) {
      lastSubmission.current = { payload, id: crypto.randomUUID() };
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...JSON.parse(payload), submissionId: lastSubmission.current.id }),
        signal: AbortSignal.timeout(15000),
      });
      const data = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok || data.ok !== true) {
        setSubmitError(typeof data.error === 'string' ? data.error : CONTACT_RETRY_MESSAGE);
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError(CONTACT_RETRY_MESSAGE);
    } finally {
      inFlight.current = false;
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form" role="status" ref={successRef} tabIndex={-1}>
        <p className="display text-[1.777rem]">Mensaje recibido.</p>
        <p className="mt-4 font-sans text-base text-gray-600">
          Te respondemos dentro de 48 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      aria-busy={submitting}
      noValidate
      toolname="prepare_contact_message"
      tooldescription="Prepares ABN's contact form with the visitor's reviewed message about their organization, processes, information, and decisions. The visitor must click Enviar mensaje to send it."
    >
      <fieldset disabled={submitting}>
      <div className="grid items-end gap-6 lg:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="field-label">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            toolparamdescription="The visitor's full name."
            className="field-input"
            value={formData.nombre}
            onChange={handleChange}
            ref={nombreRef}
            aria-invalid={Boolean(fieldErrors.nombre)}
            aria-describedby={fieldErrors.nombre ? 'nombre-error' : undefined}
          />
          {fieldErrors.nombre && (
            <p id="nombre-error" className="mt-1 font-sans text-sm text-[var(--error)]" role="alert">
              {fieldErrors.nombre}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            toolparamdescription="The visitor's email address for ABN's reply."
            className="field-input"
            value={formData.email}
            onChange={handleChange}
            ref={emailRef}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 font-sans text-sm text-[var(--error)]" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="organizacion" className="field-label field-label--optional">
            Organización · opcional
          </label>
          <input
            id="organizacion"
            name="organizacion"
            type="text"
            maxLength={200}
            autoComplete="organization"
            toolparamdescription="The visitor's organization, when relevant."
            className="field-input"
            value={formData.organizacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tipoInstitucion" className="field-label field-label--optional">
            Tipo de organización · opcional
          </label>
          <select
            id="tipoInstitucion"
            name="tipoInstitucion"
            toolparamdescription="Type of organization represented by the visitor. Other organizations are welcome. Leave blank if unspecified."
            className="field-input"
            value={formData.tipoInstitucion}
            onChange={handleChange}
          >
            <option value="">Seleccionar…</option>
            <option value="Colegio / centro educativo">Colegio / centro educativo</option>
            <option value="Iglesia / red eclesiástica">Iglesia / red eclesiástica</option>
            <option value="Otra organización">Otra organización</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="mensaje" className="field-label">
          ¿Qué necesitas entender o gestionar mejor?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          maxLength={3000}
          toolparamdescription="The information, processes, or decisions the visitor needs help with."
          className="field-input"
          value={formData.mensaje}
          onChange={handleChange}
          ref={mensajeRef}
          aria-invalid={Boolean(fieldErrors.mensaje)}
          aria-describedby={fieldErrors.mensaje ? 'mensaje-error' : undefined}
        />
        {fieldErrors.mensaje && (
          <p id="mensaje-error" className="mt-1 font-sans text-sm text-[var(--error)]" role="alert">
            {fieldErrors.mensaje}
          </p>
        )}
      </div>

      {/* Honeypot (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {submitError && (
        <p className="mt-6 font-sans text-base text-[var(--error,hsl(0_72%_51%))]" role="alert">
          {submitError} Puedes escribirnos directamente a{' '}
          <a href="mailto:anthony@bir.com.py" className="underline underline-offset-4">anthony@bir.com.py</a>.
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        <p className="font-sans text-xs uppercase tracking-[0.1em] text-gray-600">
          Respuesta en hasta 48 horas hábiles
        </p>
      </div>
      </fieldset>
    </form>
  );
}
