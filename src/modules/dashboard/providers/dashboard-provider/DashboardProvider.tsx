import dayjs from 'dayjs';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDisplayDate } from '@/core/lib/helpers/format';
import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';
import { useGetMachines } from '@/modules/machines/hooks/api/use-get-machines';

import type { Locale } from '@/core/types';
import type { PropsWithChildren } from 'react';

function DashboardProvider({ children }: PropsWithChildren) {
  const { i18n } = useTranslation();
  const {
    data: machines,
    dataUpdatedAt,
    isFetching,
  } = useGetMachines({
    refetchInterval: 60_000,
    refetchIntervalInBackground: false,
  });

  const lastUpdated = formatDisplayDate(
    dayjs(dataUpdatedAt),
    i18n.language as Locale,
  );

  return (
    <DashboardContext.Provider
      value={{ machines: machines ?? [], lastUpdated, isLoading: isFetching }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default memo(DashboardProvider);
