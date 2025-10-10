import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { memo, MouseEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { match } from 'ts-pattern';

import { formatDisplayDate } from '@/core/lib/helpers/format';
import { BorderStack } from '@/core/styles/common';
import CriteriaGroup from '@/modules/dashboard/components/criteria-group';
import SalesRanking from '@/modules/dashboard/components/sales-ranking';
import useBestSellingLocationType from '@/modules/dashboard/hooks/use-best-selling-location-type';

import type { Locale } from '@/core/types';
import type { ICriteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

function BestSellingLocationTypeContainer() {
  const { i18n } = useTranslation();
  const [criteria, setCriteria] = useState<ICriteria>('all-time');
  const onChangeCriteria = useCallback(
    (_: MouseEvent<HTMLElement>, nextCriteria: ICriteria) => {
      setCriteria(nextCriteria ?? criteria);
    },
    [criteria],
  );

  const { allTime, lastSevenDays, dataUpdatedAt } =
    useBestSellingLocationType();

  return (
    <BorderStack>
      <Box display="flex" justifyContent="center">
        <CriteriaGroup
          criteria={criteria}
          onChangeCriteria={onChangeCriteria}
        />
      </Box>

      <SalesRanking
        items={match(criteria)
          .with('all-time', () => allTime)
          .with('last-7', () => lastSevenDays)
          .exhaustive()}
      />

      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated:{' '}
        {formatDisplayDate(dayjs(dataUpdatedAt), i18n.language as Locale)}
      </Typography>
    </BorderStack>
  );
}

export default memo(BestSellingLocationTypeContainer);
