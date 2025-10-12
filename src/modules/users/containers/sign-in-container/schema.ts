import { z } from 'zod';

export const Schema = z.object({
  email: z
    .string()
    .min(1, { message: 'form.errors.email.required' })
    .pipe(z.email({ message: 'form.errors.email.invalid' })),
  password: z
    .string()
    .min(1, { message: 'form.errors.password.required' })
    .min(8, { message: 'form.errors.password.invalid' }),
});

export type SchemaFormData = z.infer<typeof Schema>;
