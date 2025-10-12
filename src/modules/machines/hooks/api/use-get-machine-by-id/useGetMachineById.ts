import { useQuery } from '@tanstack/react-query';

import { getMachineById } from '@/modules/machines/api/get-machine-by-id';

import type {
  GetMachineByIdParams,
  QueryOptionsGetMachineById,
  QueryResultsGetMachineById,
} from '@/modules/machines/api/get-machine-by-id/types';

export function useGetMachineById(
  params: GetMachineByIdParams,
  options?: QueryOptionsGetMachineById,
): QueryResultsGetMachineById {
  return useQuery({
    queryKey: ['get-machine-by-id', params],
    queryFn: () => getMachineById(params),
    ...options,
  });
}
