import dayjs from 'dayjs';
import Decimal from 'decimal.js';
import { useCallback, useContext } from 'react';

import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

import { baseSummary } from './helpers';

import type { ICriteria, InitialSummary } from './types';
import type { ILocationType } from '@/core/types/models/machine.model';

export default function useBestSellingLocationType() {
  const { machines, lastUpdated } = useContext(DashboardContext);
  const initialSummary = useCallback(
    (criteria: ICriteria) => {
      if (!machines) return {};

      const base = baseSummary();

      return machines.reduce<InitialSummary>((acc, machine) => {
        const key = machine.locationType;
        const sales = Decimal(machine.expectedSalesPerDay).toNumber();
        const createdAt = dayjs(machine.createdAt);

        if (criteria === 'last-7') {
          const startOfWeek = dayjs().subtract(1, 'week');

          if (createdAt.isBefore(startOfWeek)) {
            return acc;
          }
        }

        if (!acc[key]) {
          acc[key] = { totalCount: 0, totalExpectedSalesPerDay: 0 };
        }

        acc[key].totalCount += 1;
        acc[key].totalExpectedSalesPerDay += sales;

        return acc;
      }, base);
    },
    [machines],
  );

  const summarize = useCallback((input: InitialSummary) => {
    return Object.entries(input)
      .map(([locationType, { totalCount, totalExpectedSalesPerDay }]) => ({
        locationType: locationType as ILocationType,
        totalCount,
        totalExpectedSalesPerDay,
      }))
      .sort((a, b) => b.totalExpectedSalesPerDay - a.totalExpectedSalesPerDay)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
      }));
  }, []);

  // grouped
  const allTime = initialSummary('all-time');
  const lastSevenDays = initialSummary('last-7');

  return {
    allTime: summarize(allTime),
    lastSevenDays: summarize(lastSevenDays),
    lastUpdated,
  };
}
