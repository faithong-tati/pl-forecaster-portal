import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

export type UseCustomQueryOptions<T, TError = unknown> =
  | Omit<UseQueryOptions<T, TError>, 'queryFn' | 'queryKey'>
  | undefined;

export type UseCustomQueryResult<T, TErr = unknown> = UseQueryResult<T, TErr>;
