import { fetchAPI } from '@/core/lib/api/fetcher';

import type { GetUserByIdParams, GetUserByIdResponse } from './types';

export async function getUserById({
  id,
}: GetUserByIdParams): Promise<GetUserByIdResponse> {
  const path = `/users/${id}`;
  const { data } = await fetchAPI<GetUserByIdResponse>({
    path,
    method: 'GET',
  });

  return data;
}
