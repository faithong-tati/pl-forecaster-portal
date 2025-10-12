import Decimal from 'decimal.js';

import type { AvgDailyTemperature } from './types';
import type { TemperatureDaily } from '@/core/lib/api/get-daily-temperature/types';
import type { MachineModel } from '@/core/types/models';

// * ==========================================
// * formula: avg = (max + min)/2
// * ==========================================
export function getAvgDailyTemperatureList(daily: TemperatureDaily | null) {
  if (!daily) return [];

  return daily.time.reduce<AvgDailyTemperature[]>((acc, date, i) => {
    const max = new Decimal(daily.temperature_2m_max[i]);
    const min = new Decimal(daily.temperature_2m_min[i]);
    const avgDecimal = max.plus(min).div(2);
    const avg = avgDecimal.toNumber();

    acc.push({ time: date, avg });

    return acc;
  }, []);
}

// * ==========================================
// * formula: sumGrossProfit = ∑ (expectedSalesPerDay * (averageProfitMarginPercentage / 100))
// * ==========================================
export function sumGrossProfit(machines: MachineModel[]): number {
  return machines
    .reduce((acc, machine) => {
      const sales = new Decimal(machine.expectedSalesPerDay);
      const margin = new Decimal(machine.averageProfitMarginPercentage).div(
        100,
      );

      const total = sales.mul(margin);

      return acc.plus(total);
    }, new Decimal(0))
    .toNumber();
}

// * ==========================================
// * formula: sumRent = ∑ rentCostPerDay
// * ==========================================
export function sumRent(machines: MachineModel[]): number {
  return machines
    .reduce(
      (acc, machine) => acc.plus(new Decimal(machine.rentCostPerDay)),
      new Decimal(0),
    )
    .toNumber();
}

// * ==========================================
// * formula: sumElectricityCost = ∑ electricCostPerTempPerDay
// * ==========================================
export function sumElectricityCost(machines: MachineModel[]): number {
  return machines
    .reduce(
      (acc, machine) =>
        acc.plus(new Decimal(machine.electricCostPerTempPerDay)),
      new Decimal(0),
    )
    .toNumber();
}

// * ==========================================
// * formula: totalRevenue = ∑ (expectedSalesPerDay * 7)
// * ==========================================
export function totalRevenue(machines: MachineModel[]): number {
  const sum = machines.reduce(
    (acc, machine) => acc.plus(new Decimal(machine.expectedSalesPerDay)),
    new Decimal(0),
  );

  return sum.mul(7).toNumber();
}

// * ==========================================
// * formula: totalRent = ∑ (rentCostPerDay * 7)
// * ==========================================
export function totalRent(machines: MachineModel[]): number {
  const sum = machines.reduce(
    (acc, machine) => acc.plus(new Decimal(machine.rentCostPerDay)),
    new Decimal(0),
  );

  return sum.mul(7).toNumber();
}

// * ==========================================
// * formula: totalElectricityCost = ∑ (avgDailyTemperature * (∑ electricCostPerTempPerDay))
// * ==========================================
export function totalElectricityCost(
  avgDailyTemperatureList: AvgDailyTemperature[],
  sumElectricityCost: number,
): number {
  const sum = avgDailyTemperatureList.reduce(
    (acc, temp) => acc.plus(new Decimal(temp.avg)),
    new Decimal(0),
  );

  const costPerDegree = new Decimal(sumElectricityCost);

  return sum.mul(costPerDegree).toNumber();
}

// * ==========================================
// * formula: netProfit = ∑ dailyPL
// * ==========================================
export function netProfit(profitLossSeries: number[]): number {
  return profitLossSeries
    .reduce((acc, profit) => acc.plus(new Decimal(profit)), new Decimal(0))
    .toNumber();
}
