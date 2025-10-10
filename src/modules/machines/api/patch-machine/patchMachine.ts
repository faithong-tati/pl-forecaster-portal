import { fetchAPI } from '@/core/lib/api/fetcher';

import type { PatchMachineParams, PatchMachineResponse } from './types';

export async function patchMachine({
  id,
  ...params
}: PatchMachineParams): Promise<PatchMachineResponse> {
  const path = `/machines/${id}`;
  const { data } = await fetchAPI<PatchMachineResponse>({
    path,
    method: 'PATCH',
    data: params,
  });

  return data;
}
