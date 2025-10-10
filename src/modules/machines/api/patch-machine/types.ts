import type { MachineModel } from '@/core/types/models';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export type PatchMachineParams = Omit<
  MachineModel,
  'createdAt' | 'createdBy' | 'createdByUserId'
>;

export type PatchMachineResponse = MachineModel;

export type MutationOptionsPatchMachine = UseMutationOptions<
  PatchMachineResponse,
  unknown,
  PatchMachineParams
>;

export type MutationResultsPatchMachine = UseMutationResult<
  PatchMachineResponse,
  unknown,
  PatchMachineParams
>;
