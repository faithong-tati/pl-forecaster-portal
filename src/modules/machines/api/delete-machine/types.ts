import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export interface DeleteMachineParams {
  id: string;
}

export interface DeleteMachineResponse {
  success: boolean;
}

export type MutationOptionsDeleteMachine = UseMutationOptions<
  DeleteMachineResponse,
  unknown,
  DeleteMachineParams
>;

export type MutationResultsDeleteMachine = UseMutationResult<
  DeleteMachineResponse,
  unknown,
  DeleteMachineParams
>;
