import { fetchAPI } from '@/core/lib/api/fetcher';

import type { DeleteMachineParams, DeleteMachineResponse } from './types';

export async function deleteMachine({
  id,
}: DeleteMachineParams): Promise<DeleteMachineResponse> {
  const path = `/machines/${id}`;
  const { data } = await fetchAPI<DeleteMachineResponse>({
    path,
    method: 'DELETE',
  });

  return data;
}
