import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';

export interface IDashboardContext {
  dailyTemperature: GetDailyTemperatureResponse;
  isLoading: boolean;
  lastUpdated: string;
}
