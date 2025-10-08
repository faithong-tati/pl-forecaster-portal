import { fetchAPI } from '@/core/lib/api/fetcher';

import type { PostUserParams, PostUserResponse } from './types';

export async function postUser(
  params: PostUserParams,
): Promise<PostUserResponse> {
  const path = '/users';
  const { data } = await fetchAPI<PostUserResponse>({
    path,
    method: 'POST',
    data: params,
  });

  return data;
}
