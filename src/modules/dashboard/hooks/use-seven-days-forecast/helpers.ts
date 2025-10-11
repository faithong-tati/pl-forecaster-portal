import type { TemperatureDaily } from '@/core/lib/api/get-daily-temperature/types';
import type { MachineModel } from '@/core/types/models';

type AvgDailyTemperature = { time: string; avg: number };

// * ==========================================
// * formula: avg = (max + min)/2
// * ==========================================
export function getAvgDailyTemperatureList(daily: TemperatureDaily | null) {
  if (!daily) return [];

  return daily.time.reduce<AvgDailyTemperature[]>((acc, date, i) => {
    const max = Number(daily.temperature_2m_max[i]);
    const min = Number(daily.temperature_2m_min[i]);
    const avg = (max + min) / 2;

    acc.push({ time: date, avg });

    return acc;
  }, []);
}

// * ==========================================
// * formula: sumGrossProfit = ∑ (expectedSalesPerDay * (averageProfitMarginPercentage / 100))
// * ==========================================
export function sumGrossProfit(machines: MachineModel[]) {
  return machines.reduce((acc, m) => {
    const sales = Number(m.expectedSalesPerDay);
    const margin = Number(m.averageProfitMarginPercentage) / 100;
    const total = sales * margin;

    return acc + total;
  }, 0);
}

// * ==========================================
// * formula: sumRent = ∑ rentCostPerDay
// * ==========================================
export function sumRent(machines: MachineModel[]) {
  return machines.reduce((acc, m) => acc + Number(m.rentCostPerDay), 0);
}

// * ==========================================
// * formula: sumElectricityCost = ∑ electricCostPerTempPerDay
// * ==========================================
export function sumElectricityCost(machines: MachineModel[]) {
  return machines.reduce(
    (acc, m) => acc + Number(m.electricCostPerTempPerDay),
    0,
  );
}
