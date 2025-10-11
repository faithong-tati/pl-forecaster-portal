import dayjs from 'dayjs';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDisplayDate } from '@/core/lib/helpers/format';
import { useGetDailyTemperature } from '@/core/lib/hooks/api/use-get-daily-temperature/useGetDailyTemperature';
import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

import type { GetDailyTemperatureResponse } from '@/core/lib/api/get-daily-temperature/types';
import type { Locale } from '@/core/types';
import type { PropsWithChildren } from 'react';

function DashboardProvider({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  // async hooks
  const {
    data: dailyTemperature,
    dataUpdatedAt,
    isFetching,
  } = useGetDailyTemperature();

  // const
  const lastUpdated = formatDisplayDate(
    dayjs(dataUpdatedAt),
    i18n.language as Locale,
  );

  return (
    <DashboardContext.Provider
      value={{
        lastUpdated,
        isLoading: isFetching,
        dailyTemperature: dailyTemperature as GetDailyTemperatureResponse,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default memo(DashboardProvider);
