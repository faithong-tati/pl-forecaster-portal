import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';

export interface GetGoogleUserParams {
  token: string;
}

export type GetGoogleUserResponse = Response;

export type QueryOptionsGetGoogleUser =
  UseCustomQueryOptions<GetGoogleUserResponse>;

export type QueryResultsGetGoogleUser =
  UseCustomQueryResult<GetGoogleUserResponse>;
