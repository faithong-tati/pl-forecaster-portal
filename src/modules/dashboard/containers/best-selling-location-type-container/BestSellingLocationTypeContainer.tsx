import { Box, Grid, Typography } from '@mui/material';
import { memo, MouseEvent, useCallback, useMemo, useState } from 'react';
import { match } from 'ts-pattern';

import useOptions from '@/core/hooks/use-options';
import { BorderStack } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import CriteriaGroup from '@/modules/dashboard/components/criteria-group';
import PieChart from '@/modules/dashboard/components/pie-chart';
import SalesRanking from '@/modules/dashboard/components/sales-ranking';
import useBestSellingLocationType from '@/modules/dashboard/hooks/use-best-selling-location-type';

import type { ICriteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

function BestSellingLocationTypeContainer() {
  const { allTime, lastSevenDays, lastUpdated } = useBestSellingLocationType();
  const { locationTypeOptions } = useOptions();
  // state
  const [criteria, setCriteria] = useState<ICriteria>('all-time');
  const onChangeCriteria = useCallback(
    (_: MouseEvent<HTMLElement>, nextCriteria: ICriteria) => {
      setCriteria(nextCriteria ?? criteria);
    },
    [criteria],
  );

  const data = useMemo(() => {
    return match(criteria)
      .with('all-time', () => allTime)
      .with('last-7', () => lastSevenDays)
      .exhaustive();
  }, [allTime, criteria, lastSevenDays]);

  const pieChartDate = useMemo(() => {
    return data
      .sort((a, b) => a.locationType.localeCompare(b.locationType))
      .map((datum) => {
        const location =
          locationTypeOptions.find(
            (option) => option.value === datum.locationType,
          )?.label ?? '';

        return {
          value: datum.totalExpectedSalesPerDay,
          name: location,
        };
      });
  }, [data, locationTypeOptions]);

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

      <Grid container spacing={rem(24)}>
        <Grid size={{ xs: 8 }}>
          <SalesRanking items={data} />
        </Grid>

        <Grid size={{ xs: 4 }}>
          <PieChart data={pieChartDate} />
        </Grid>
      </Grid>

      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated: {lastUpdated}
      </Typography>
    </BorderStack>
  );
}

export default memo(BestSellingLocationTypeContainer);
