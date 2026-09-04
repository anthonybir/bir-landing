import { z } from 'zod';

export const CONTACT_RETRY_MESSAGE = 'No pudimos confirmar el envío. Tu mensaje sigue aquí; puedes volver a intentarlo.';

export const ContactSchema = z.object({
  nombre: z
    .string({ error: 'El nombre es obligatorio.' })
    .trim()
    .min(1, 'El nombre es obligatorio.')
    .max(100, 'El nombre es demasiado largo.'),
  email: z
    .string({ error: 'Introduce un correo electrónico válido.' })
    .trim()
    .email('Introduce un correo electrónico válido.')
    .max(254, 'El correo es demasiado largo.'),
  organizacion: z
    .string({ error: 'El valor debe ser texto.' })
    .trim()
    .max(200, 'La organización es demasiado larga.')
    .optional(),
  tipoInstitucion: z
    .string({ error: 'El valor debe ser texto.' })
    .trim()
    .max(200, 'El tipo de institución es demasiado largo.')
    .optional(),
  mensaje: z
    .string({ error: 'El mensaje es obligatorio.' })
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(3000, 'El mensaje es demasiado largo.'),
  submissionId: z.uuid({ error: 'Identificador de envío inválido.' }).optional(),
  website: z.string({ error: 'El valor debe ser texto.' }).trim().optional(),
}, { error: 'Datos inválidos.' });
