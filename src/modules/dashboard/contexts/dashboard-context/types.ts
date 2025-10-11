import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';
import type { MachineModel } from '@/core/types/models';

export interface IDashboardContext {
  dailyTemperature: GetDailyTemperatureResponse;
  isLoading: boolean;
  lastUpdated: string;
  machines: MachineModel[];
}
