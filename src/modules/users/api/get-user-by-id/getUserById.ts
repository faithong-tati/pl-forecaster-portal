import { fetchAPI } from '@/core/lib/api/fetcher';

import type { GetUserByIdParams, GetUserByIdResponse } from './types';

export async function getUserById({
  id,
  providerRef,
}: GetUserByIdParams): Promise<GetUserByIdResponse> {
  const path = providerRef ? '/users' : `/users/${id}`;
  const { data } = await fetchAPI<GetUserByIdResponse>({
    path,
    method: 'GET',
    params: {
      providerRef,
    },
  });

  if (Array.isArray(data) && data.length) {
    return data[0];
  }

  return data;
}
