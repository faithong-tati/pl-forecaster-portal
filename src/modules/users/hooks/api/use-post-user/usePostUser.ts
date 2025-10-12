import { useMutation } from '@tanstack/react-query';

import { postUser } from '@/modules/users/api/post-user';

import type {
  MutationOptionsPostUser,
  MutationResultsPostUser,
} from '@/modules/users/api/post-user/types';

export function usePostUser(
  options?: MutationOptionsPostUser,
): MutationResultsPostUser {
  return useMutation({
    mutationFn: postUser,
    ...options,
  });
}
