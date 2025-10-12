import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';
import type { MachineModel } from '@/core/types/models';

export type GetMachinesResponse = MachineModel[];

export type QueryOptionsGetMachines =
  UseCustomQueryOptions<GetMachinesResponse>;

export type QueryResultsGetMachines = UseCustomQueryResult<GetMachinesResponse>;
