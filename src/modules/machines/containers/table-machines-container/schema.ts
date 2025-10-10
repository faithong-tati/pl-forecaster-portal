import { z } from 'zod';

export const GetSchema = z.object({
  search: z.string().nullable().optional(),
  locationType: z.string().nullable().optional(),
});

export type GetSchemaFormData = z.infer<typeof GetSchema>;

export const UpsertSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'table.modals.upsert.errors.name.required' }),
  locationType: z
    .string()
    .min(1, { message: 'table.modals.upsert.errors.locationType.required' }),
  expectedSalesPerDay: z.string().min(1, {
    message: 'table.modals.upsert.errors.expectedSalesPerDay.required',
  }),
  averageProfitMarginPercentage: z.string().min(1, {
    message:
      'table.modals.upsert.errors.averageProfitMarginPercentage.required',
  }),
  rentCostPerDay: z
    .string()
    .min(1, { message: 'table.modals.upsert.errors.rentCostPerDay.required' }),
  electricCostPerTempPerDay: z.string().min(1, {
    message: 'table.modals.upsert.errors.electricCostPerTempPerDay.required',
  }),
});

export type UpsertSchemaFormData = z.infer<typeof UpsertSchema>;
