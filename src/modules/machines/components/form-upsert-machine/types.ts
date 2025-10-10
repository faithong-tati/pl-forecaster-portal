import type { UpsertSchemaFormData } from '@/modules/machines/containers/table-machines-container/schema';
import type { UseFormReset } from 'react-hook-form';

export interface FormUpsertMachineProps {
  reset: UseFormReset<UpsertSchemaFormData>;
}
