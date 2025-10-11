import { useContext } from 'react';

import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

import { getAvgDailyTemperatureList } from './helpers';

export default function useSevenDaysForecast() {
  const { dailyTemperature, lastUpdated } = useContext(DashboardContext);
  // computed
  const avgDailyTemperatureList = getAvgDailyTemperatureList(
    dailyTemperature?.daily ?? null,
  );


  console.log(avgDailyTemperatureList)

  return {
    avgDailyTemperatureList,
    lastUpdated,
  };
}
