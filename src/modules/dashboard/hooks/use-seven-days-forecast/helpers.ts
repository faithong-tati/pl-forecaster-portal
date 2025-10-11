import Decimal from 'decimal.js';

import type { TemperatureDaily } from '@/core/lib/api/get-daily-temperature/types';

type AvgDailyTemperature = { time: string; avg: number };

export function getAvgDailyTemperatureList(daily: TemperatureDaily | null) {
  if (!daily) return [];

  return daily.time.reduce<AvgDailyTemperature[]>((acc, date, i) => {
    const max = new Decimal(daily.temperature_2m_max[i]);
    const min = new Decimal(daily.temperature_2m_min[i]);
    const avg = max.plus(min).toNumber() / 2;

    acc.push({ time: date, avg: Number(avg.toFixed(2)) });

    return acc;
  }, []);
}
