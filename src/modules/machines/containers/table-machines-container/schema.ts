import { z } from 'zod';

export const GetSchema = z.object({
  search: z.string().nullable().optional(),
  locationType: z.string().nullable().optional(),
});

export type GetSchemaFormData = z.infer<typeof GetSchema>;
