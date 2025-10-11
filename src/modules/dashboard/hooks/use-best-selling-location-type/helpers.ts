import { LocationType } from '@/core/types/models/machine.model';

import { InitialSummary } from './types';

export function baseSummary(): InitialSummary {
  return Object.values(LocationType).reduce<InitialSummary>((acc, lt) => {
    acc[lt] = { totalCount: 0, totalExpectedSalesPerDay: 0 };

    return acc;
  }, {});
}
