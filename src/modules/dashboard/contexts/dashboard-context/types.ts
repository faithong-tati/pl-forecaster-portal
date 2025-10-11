import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';
import type { MachineModel } from '@/core/types/models';
import type { GetMachinesResponse } from '@/modules/machines/api/get-machines/types';
import type {
  QueryObserverResult,
  RefetchOptions,
} from '@tanstack/react-query';

export interface IDashboardContext {
  dailyTemperature: GetDailyTemperatureResponse;
  isLoading: boolean;
  lastUpdated: string;
  machines: MachineModel[];
  refetchMachines?(
    options?: RefetchOptions,
  ): Promise<QueryObserverResult<GetMachinesResponse, unknown>>;
}
