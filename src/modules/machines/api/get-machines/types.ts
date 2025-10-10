import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';
import type { UserModel } from '@/core/types/models';

export type GetMachinesResponse = UserModel;

export type QueryOptionsGetMachines =
  UseCustomQueryOptions<GetMachinesResponse>;

export type QueryResultsGetMachines = UseCustomQueryResult<GetMachinesResponse>;
