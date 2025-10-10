import { useQuery } from '@tanstack/react-query';

import { getMachines } from '@/modules/machines/api/get-machines';

import type {
  QueryOptionsGetMachines,
  QueryResultsGetMachines,
} from '@/modules/machines/api/get-machines/types';

export function useGetMachines(
  options?: QueryOptionsGetMachines,
): QueryResultsGetMachines {
  return useQuery({
    queryKey: ['get-machines'],
    queryFn: getMachines,
    ...options,
  });
}
