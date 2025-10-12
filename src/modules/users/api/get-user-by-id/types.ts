import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';
import type { UserModel } from '@/core/types/models';

export interface GetUserByIdParams {
  providerRef: string;
  id?: number;
}

export type GetUserByIdResponse = UserModel;

export type QueryOptionsGetUserById =
  UseCustomQueryOptions<GetUserByIdResponse>;

export type QueryResultsGetUserById = UseCustomQueryResult<GetUserByIdResponse>;
