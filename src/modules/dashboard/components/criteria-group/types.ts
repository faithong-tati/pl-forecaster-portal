import type { ICriteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';
import type { MouseEvent } from 'react';

export interface CriteriaGroupProps {
  criteria: ICriteria;
  onChangeCriteria(
    event: MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ): void;
}
