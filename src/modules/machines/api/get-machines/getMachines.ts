import { fetchAPI } from '@/core/lib/api/fetcher';

import type { GetMachinesResponse } from './types';

export async function getMachines(): Promise<GetMachinesResponse> {
  const path = '/machines';
  const { data } = await fetchAPI<GetMachinesResponse>({
    path,
    method: 'GET',
  });

  return data;
}
