import { useContext, useMemo } from 'react';

import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

import {
  getAvgDailyTemperatureList,
  sumElectricityCost,
  sumGrossProfit,
  sumRent,
} from './helpers';

export default function useSevenDaysForecast() {
  const { dailyTemperature, lastUpdated, machines } =
    useContext(DashboardContext);

  // computed
  const avgDailyTemperatureList = getAvgDailyTemperatureList(
    dailyTemperature?.daily ?? null,
  );

  const base = useMemo(
    () => sumGrossProfit(machines) - sumRent(machines),
    [machines],
  );

  const dates = useMemo(
    () => avgDailyTemperatureList.map((data) => data.time),
    [avgDailyTemperatureList],
  );

  // final
  const electricityCostSeries = useMemo(
    () =>
      avgDailyTemperatureList.map((data) =>
        Number((data.avg * sumElectricityCost(machines)).toFixed(2)),
      ),
    [avgDailyTemperatureList, machines],
  );

  const profitLossSeries = useMemo(
    () =>
      avgDailyTemperatureList.map((_, i) =>
        Number((base - electricityCostSeries[i]).toFixed(2)),
      ),
    [avgDailyTemperatureList, base, electricityCostSeries],
  );

  return {
    lastUpdated,
    series: { electricityCostSeries, profitLossSeries },
    xAisData: dates,
  };
}
