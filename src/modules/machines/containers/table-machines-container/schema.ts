import { z } from 'zod';

import { LocationType } from '@/core/types/models/machine.model';

export const GetSchema = z.object({
  search: z.string().nullable().optional(),
  locationType: z
    .object({
      status: z.enum<LocationType[]>(Object.values(LocationType)),
    })
    .nullable()
    .optional(),
});

export type GetSchemaFormData = z.infer<typeof GetSchema>;
