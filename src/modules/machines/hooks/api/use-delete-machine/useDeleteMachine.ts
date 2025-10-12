import { useMutation } from '@tanstack/react-query';

import { deleteMachine } from '@/modules/machines/api/delete-machine';

import type {
  MutationOptionsDeleteMachine,
  MutationResultsDeleteMachine,
} from '@/modules/machines/api/delete-machine/types';

export function useDeleteMachine(
  options?: MutationOptionsDeleteMachine,
): MutationResultsDeleteMachine {
  return useMutation({
    mutationFn: deleteMachine,
    ...options,
  });
}
