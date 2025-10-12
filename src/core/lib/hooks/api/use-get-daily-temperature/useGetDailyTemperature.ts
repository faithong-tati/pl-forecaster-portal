import { useQuery } from '@tanstack/react-query';

import { getDailyTemperature } from '@/core/lib/api/get-daily-temperature';

import type {
  QueryOptionsGetDailyTemperature,
  QueryResultsGetDailyTemperature,
} from '@/core/lib/api/get-daily-temperature/types';

export function useGetDailyTemperature(
  options?: QueryOptionsGetDailyTemperature,
): QueryResultsGetDailyTemperature {
  return useQuery({
    queryKey: ['get-daily-temperature'],
    queryFn: getDailyTemperature,
    ...options,
  });
}
