import { fetchAPI } from '@/core/lib/api/fetcher';

import type { PostMachineParams, PostMachineResponse } from './types';

export async function postMachine(
  params: PostMachineParams,
): Promise<PostMachineResponse> {
  const path = '/machines';
  const { data } = await fetchAPI<PostMachineResponse>({
    path,
    method: 'POST',
    data: params,
  });

  return data;
}
