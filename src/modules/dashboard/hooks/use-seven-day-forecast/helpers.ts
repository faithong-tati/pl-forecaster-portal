import type { AvgDailyTemperature } from './types';
import type { TemperatureDaily } from '@/core/lib/api/get-daily-temperature/types';
import type { MachineModel } from '@/core/types/models';

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
  return machines.reduce((acc, machine) => {
    const sales = Number(machine.expectedSalesPerDay);
    const margin = Number(machine.averageProfitMarginPercentage) / 100;
    const total = sales * margin;

    return acc + total;
  }, 0);
}

// * ==========================================
// * formula: sumRent = ∑ rentCostPerDay
// * ==========================================
export function sumRent(machines: MachineModel[]) {
  return machines.reduce(
    (acc, machine) => acc + Number(machine.rentCostPerDay),
    0,
  );
}

// * ==========================================
// * formula: sumElectricityCost = ∑ electricCostPerTempPerDay
// * ==========================================
export function sumElectricityCost(machines: MachineModel[]) {
  return machines.reduce(
    (acc, machine) => acc + Number(machine.electricCostPerTempPerDay),
    0,
  );
}

// * ==========================================
// * formula: totalRevenue = ∑ (expectedSalesPerDay * 7)
// * ==========================================
export function totalRevenue(machines: MachineModel[]) {
  const sum = machines.reduce(
    (acc, machine) => acc + Number(machine.expectedSalesPerDay),
    0,
  );

  return sum * 7;
}

// * ==========================================
// * formula: totalRent = ∑ (rentCostPerDay * 7)
// * ==========================================
export function totalRent(machines: MachineModel[]) {
  const sum = machines.reduce(
    (acc, machine) => acc + Number(machine.rentCostPerDay),
    0,
  );

  return sum * 7;
}

// * ==========================================
// * formula: totalElectricityCost = ∑ (avgDailyTemperature * (∑ electricCostPerTempPerDay))
// * ==========================================
export function totalElectricityCost(
  avgDailyTemperatureList: AvgDailyTemperature[],
  sumElectricityCost: number,
) {
  const sum = avgDailyTemperatureList.reduce(
    (acc, temp) => acc + Number(temp.avg),
    0,
  );

  return sum * sumElectricityCost;
}

// * ==========================================
// * formula: netProfit = ∑ dailyPL
// * ==========================================
export function netProfit(profitLossSeries: number[]) {
  return profitLossSeries.reduce((acc, profit) => acc + Number(profit), 0);
}
