import { useQuery } from '@tanstack/react-query';

import { getUserById } from '@/modules/users/api/get-user-by-id';

import type {
  GetUserByIdParams,
  QueryOptionsGetUserById,
  QueryResultsGetUserById,
} from '@/modules/users/api/get-user-by-id/types';

export function useGetUserById(
  params: GetUserByIdParams,
  options?: QueryOptionsGetUserById,
): QueryResultsGetUserById {
  return useQuery({
    queryKey: ['get-user-by-id', params],
    queryFn: () => getUserById(params),
    ...options,
  });
}
