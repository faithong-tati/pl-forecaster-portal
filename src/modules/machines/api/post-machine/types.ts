import type { MachineModel } from '@/core/types/models';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export type PostMachineParams = Omit<MachineModel, 'id'>;

export type PostMachineResponse = MachineModel;

export type MutationOptionsPostMachine = UseMutationOptions<
  PostMachineResponse,
  unknown,
  PostMachineParams
>;

export type MutationResultsPostMachine = UseMutationResult<
  PostMachineResponse,
  unknown,
  PostMachineParams
>;
