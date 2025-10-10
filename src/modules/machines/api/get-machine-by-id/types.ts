import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';
import type { MachineModel } from '@/core/types/models';

export interface GetMachineByIdParams {
  id: string;
}

export type GetMachineByIdResponse = MachineModel;

export type QueryOptionsGetMachineById =
  UseCustomQueryOptions<GetMachineByIdResponse>;

export type QueryResultsGetMachineById =
  UseCustomQueryResult<GetMachineByIdResponse>;
