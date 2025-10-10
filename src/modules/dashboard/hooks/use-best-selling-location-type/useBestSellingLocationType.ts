import dayjs from 'dayjs';
import Decimal from 'decimal.js';
import { useCallback } from 'react';

import { useGetMachines } from '@/modules/machines/hooks/api/use-get-machines';

import type { ICriteria, InitialSummary } from './types';
import type { ILocationType } from '@/core/types/models/machine.model';

export default function useBestSellingLocationType() {
  const { data: machines, dataUpdatedAt } = useGetMachines({
    refetchInterval: 60_000,
    refetchIntervalInBackground: false,
  });

  // computed
  const initialSummary = useCallback(
    (criteria: ICriteria) => {
      if (!machines) return {};

      return machines.reduce<InitialSummary>((acc, machine) => {
        const key = machine.locationType;
        const sales = Decimal(machine.expectedSalesPerDay).toNumber();
        const createdAt = dayjs(machine.createdAt);

        if (criteria === 'weekly') {
          const startOfWeek = dayjs().startOf('week');

          if (createdAt.isBefore(startOfWeek)) {
            acc[key] = { totalCount: 0, totalExpectedSalesPerDay: 0 };
          }
        }

        if (criteria === 'monthly') {
          const startOfMonth = dayjs().startOf('month');

          if (createdAt.isBefore(startOfMonth)) {
            acc[key] = { totalCount: 0, totalExpectedSalesPerDay: 0 };
          }
        }

        if (!acc[key]) {
          acc[key] = { totalCount: 0, totalExpectedSalesPerDay: 0 };
        }

        acc[key].totalCount += 1;
        acc[key].totalExpectedSalesPerDay += sales;

        return acc;
      }, {});
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
  const monthly = initialSummary('monthly');
  const weekly = initialSummary('weekly');

  return {
    allTime: summarize(allTime),
    monthly: summarize(monthly),
    weekly: summarize(weekly),
    dataUpdatedAt,
  };
}
