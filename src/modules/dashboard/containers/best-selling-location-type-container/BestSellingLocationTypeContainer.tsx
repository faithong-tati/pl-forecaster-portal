import { Box, Typography } from '@mui/material';
import { memo, MouseEvent, useCallback, useState } from 'react';
import { match } from 'ts-pattern';

import { BorderStack } from '@/core/styles/common';
import CriteriaGroup from '@/modules/dashboard/components/criteria-group';
import SalesRanking from '@/modules/dashboard/components/sales-ranking';
import useBestSellingLocationType from '@/modules/dashboard/hooks/use-best-selling-location-type';

import type { ICriteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

function BestSellingLocationTypeContainer() {
  const [criteria, setCriteria] = useState<ICriteria>('all-time');
  const onChangeCriteria = useCallback(
    (_: MouseEvent<HTMLElement>, nextCriteria: ICriteria) => {
      setCriteria(nextCriteria ?? criteria);
    },
    [criteria],
  );

  const { allTime, lastSevenDays, lastUpdated } = useBestSellingLocationType();

  return (
    <BorderStack>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" fontWeight={500}>
          Best-selling location type
        </Typography>

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
        Last updated: {lastUpdated}
      </Typography>
    </BorderStack>
  );
}

export default memo(BestSellingLocationTypeContainer);
