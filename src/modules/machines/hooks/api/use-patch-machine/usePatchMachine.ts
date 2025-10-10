import { useMutation } from '@tanstack/react-query';

import { patchMachine } from '@/modules/machines/api/patch-machine';

import type {
  MutationOptionsPatchMachine,
  MutationResultsPatchMachine,
} from '@/modules/machines/api/patch-machine/types';

export function usePatchMachine(
  options?: MutationOptionsPatchMachine,
): MutationResultsPatchMachine {
  return useMutation({
    mutationFn: patchMachine,
    ...options,
  });
}
