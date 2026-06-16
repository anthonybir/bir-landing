'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

interface FormData {
  nombre: string;
  email: string;
  organizacion: string;
  tipoInstitucion: string;
  mensaje: string;
  website: string; // honeypot
}

const INITIAL: FormData = {
  nombre: '',
  email: '',
  organizacion: '',
  tipoInstitucion: '',
  mensaje: '',
  website: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el mensaje.');
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'No se pudo enviar el mensaje.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center md:p-12" role="status">
        <p className="display text-[1.777rem]">Mensaje recibido.</p>
        <p className="mt-4 font-sans text-base text-gray-600">
          Te respondemos dentro de 48 horas hábiles, habitualmente antes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-10" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
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
            className="field-input"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="field-input"
            value={formData.email}
            onChange={handleChange}
          />
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
            className="field-input"
            value={formData.organizacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tipoInstitucion" className="field-label field-label--optional">
            Tipo de institución · opcional
          </label>
          <select
            id="tipoInstitucion"
            name="tipoInstitucion"
            className="field-input"
            value={formData.tipoInstitucion}
            onChange={handleChange}
          >
            <option value="">Seleccionar…</option>
            <option value="Colegio / centro educativo">Colegio / centro educativo</option>
            <option value="Iglesia / red eclesiástica">Iglesia / red eclesiástica</option>
            <option value="Institución sin fines de lucro">Institución sin fines de lucro</option>
            <option value="Empresa / pyme">Empresa / pyme</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="mensaje" className="field-label">
          ¿Qué necesita orden en tu institución?
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          maxLength={5000}
          className="field-input"
          value={formData.mensaje}
          onChange={handleChange}
        />
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
          {submitError} Podés escribirnos directo a anthony@bir.com.py.
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? 'Enviando…' : 'Enviar mensaje'}
        </button>
        <p className="font-sans text-xs uppercase tracking-[0.1em] text-gray-500">
          Respuesta en 48h hábiles
        </p>
      </div>
    </form>
  );
}
