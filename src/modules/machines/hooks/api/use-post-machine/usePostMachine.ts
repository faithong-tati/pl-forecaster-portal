import { useMutation } from '@tanstack/react-query';

import { postMachine } from '@/modules/machines/api/post-machine';

import type {
  MutationOptionsPostMachine,
  MutationResultsPostMachine,
} from '@/modules/machines/api/post-machine/types';

export function usePostMachine(
  options?: MutationOptionsPostMachine,
): MutationResultsPostMachine {
  return useMutation({
    mutationFn: postMachine,
    ...options,
  });
}
