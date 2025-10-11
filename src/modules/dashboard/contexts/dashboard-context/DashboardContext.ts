import { createContext } from 'react';

import type { IDashboardContext } from './types';
import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';

const DashboardContext = createContext<IDashboardContext>({
  dailyTemperature: {} as GetDailyTemperatureResponse,
  isLoading: false,
  lastUpdated: '',
  machines: [],
});

export default DashboardContext;
