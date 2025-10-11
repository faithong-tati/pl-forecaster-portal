import dayjs from 'dayjs';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDisplayDate } from '@/core/lib/helpers/format';
import { useGetDailyTemperature } from '@/core/lib/hooks/api/use-get-daily-temperature/useGetDailyTemperature';
import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';
import { useGetMachines } from '@/modules/machines/hooks/api/use-get-machines';

import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';
import type { Locale } from '@/core/types';
import type { PropsWithChildren } from 'react';

function DashboardProvider({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  // async hooks
  const { data: dailyTemperature, isFetching: isFetchingDailyTemperature } =
    useGetDailyTemperature();

  const {
    data: machines,
    dataUpdatedAt,
    isFetching: isFetchingMachines,
  } = useGetMachines({
    refetchInterval: 60_000,
    refetchIntervalInBackground: false,
  });

  // const
  const lastUpdated = formatDisplayDate(
    dayjs(dataUpdatedAt),
    i18n.language as Locale,
  );

  const isLoading = useMemo(() => {
    return isFetchingDailyTemperature || isFetchingMachines;
  }, [isFetchingDailyTemperature, isFetchingMachines]);

  return (
    <DashboardContext.Provider
      value={{
        lastUpdated,
        isLoading,
        dailyTemperature: dailyTemperature as GetDailyTemperatureResponse,
        machines: machines ?? [],
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default memo(DashboardProvider);
