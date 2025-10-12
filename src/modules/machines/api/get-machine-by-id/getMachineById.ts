import { fetchAPI } from '@/core/lib/api/fetcher';

import type { GetMachineByIdParams, GetMachineByIdResponse } from './types';

export async function getMachineById({
  id,
}: GetMachineByIdParams): Promise<GetMachineByIdResponse> {
  const path = `/machines/${id}`;
  const { data } = await fetchAPI<GetMachineByIdResponse>({
    path,
    method: 'GET',
  });

  return data;
}
