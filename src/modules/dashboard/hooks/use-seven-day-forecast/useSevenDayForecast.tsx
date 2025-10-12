import { useContext, useMemo } from 'react';

import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

import {
  getAvgDailyTemperatureList,
  netProfit,
  sumElectricityCost,
  sumGrossProfit,
  sumRent,
  totalElectricityCost,
  totalRent,
  totalRevenue,
} from './helpers';

export default function useSevenDayForecast() {
  const { dailyTemperature, lastUpdated, machines, isLoading } =
    useContext(DashboardContext);

  // computed
  const avgDailyTemperatureList = useMemo(
    () => getAvgDailyTemperatureList(dailyTemperature?.daily ?? null),
    [dailyTemperature?.daily],
  );

  const baseProfit = useMemo(
    () => sumGrossProfit(machines) - sumRent(machines),
    [machines],
  );

  const dates = useMemo(
    () => avgDailyTemperatureList.map((data) => data.time),
    [avgDailyTemperatureList],
  );

  // 7-day forecast
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
        Number((baseProfit - electricityCostSeries[i]).toFixed(2)),
      ),
    [avgDailyTemperatureList, baseProfit, electricityCostSeries],
  );

  // cumulative weekly
  const cumulative = useMemo(() => {
    return {
      totalRevenue: totalRevenue(machines),
      totalRent: totalRent(machines),
      totalElectricityCost: totalElectricityCost(
        avgDailyTemperatureList,
        sumElectricityCost(machines),
      ),
      netProfit: netProfit(profitLossSeries),
    };
  }, [avgDailyTemperatureList, machines, profitLossSeries]);

  return {
    lastUpdated,
    series: { electricityCostSeries, profitLossSeries },
    cumulative,
    xAisData: dates,
    isLoading,
  };
}
