'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  nombre: string;
  email: string;
  organizacion: string;
  mensaje: string;
  website: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    organizacion: '',
    mensaje: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el mensaje.');
      }
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'No se pudo enviar el mensaje.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="success-appear bg-background p-8 rounded-sm border border-[#2C2C2A]/10 text-center">
        <div className="w-12 h-12 bg-foreground rounded-sm flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sans font-semibold text-xl mb-2">Mensaje enviado</h3>
        <p className="font-sans text-sm text-[#2C2C2A]/60">
          Gracias por contactarnos. Respondemos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />
      <div>
        <label htmlFor="nombre" className="font-sans text-sm font-medium block mb-2">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className="font-sans w-full px-4 py-3 bg-background border border-[#2C2C2A]/20 rounded-sm input-focus transition-all"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-sans text-sm font-medium block mb-2">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          className="font-sans w-full px-4 py-3 bg-background border border-[#2C2C2A]/20 rounded-sm input-focus transition-all"
        />
      </div>
      <div>
        <label htmlFor="organizacion" className="font-sans text-sm font-medium block mb-2">Organización</label>
        <input
          id="organizacion"
          type="text"
          name="organizacion"
          value={formData.organizacion}
          onChange={handleChange}
          placeholder="Nombre de tu colegio, ONG o iglesia"
          className="font-sans w-full px-4 py-3 bg-background border border-[#2C2C2A]/20 rounded-sm input-focus transition-all"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="font-sans text-sm font-medium block mb-2">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          value={formData.mensaje}
          onChange={handleChange}
          className="font-sans w-full px-4 py-3 bg-background border border-[#2C2C2A]/20 rounded-sm input-focus transition-all resize-none"
          placeholder="Contanos sobre tu institución y qué necesitás resolver..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="font-sans w-full bg-foreground text-background py-4 rounded-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-60"
      >
        {submitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {submitError && (
        <p className="font-sans text-sm text-[#B54A4A]">{submitError}</p>
      )}
    </form>
  );
}
