import { Grid, Typography } from '@mui/material';
import {
  memo,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { match } from 'ts-pattern';

import ContentSection from '@/core/components/content-section';
import InfoCard from '@/core/components/info-card';
import useOptions from '@/core/hooks/use-options';
import rem from '@/core/utils/rem';
import CriteriaGroup from '@/modules/dashboard/components/criteria-group';
import PieChart from '@/modules/dashboard/components/pie-chart';
import SalesRanking from '@/modules/dashboard/components/sales-ranking';
import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';
import useBestSellingLocationType from '@/modules/dashboard/hooks/use-best-selling-location-type';

import type { ICriteria } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

function BestSellingLocationTypeContainer() {
  const { allTime, lastSevenDays, lastUpdated } = useBestSellingLocationType();
  const { isLoading } = useContext(DashboardContext);
  const { locationTypeOptions } = useOptions();
  const { t } = useTranslation('dashboard');
  // state
  const [criteria, setCriteria] = useState<ICriteria>('all-time');
  const onChangeCriteria = useCallback(
    (_: MouseEvent<HTMLElement>, nextCriteria: ICriteria) => {
      setCriteria(nextCriteria ?? criteria);
    },
    [criteria],
  );

  // const
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

  const hasData = useMemo(() => {
    return !!data.reduce((acc, datum) => (acc += datum.totalCount), 0);
  }, [data]);

  return (
    <InfoCard
      title={t('bestSellingLocationType.title')}
      render={
        <CriteriaGroup
          criteria={criteria}
          onChangeCriteria={onChangeCriteria}
        />
      }
    >
      <ContentSection
        hasData={hasData}
        alt="no-ranking"
        iconPath="/top-three.png"
        emptyStateText={t('bestSellingLocationType.notfound')}
        height={300}
        isLoading={isLoading}
      >
        <Grid container spacing={rem(24)}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <SalesRanking items={data} />
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <PieChart data={pieChartDate} />
          </Grid>
        </Grid>
      </ContentSection>

      <Typography variant="caption" textAlign="right" color="secondary">
        {t('shared.lastUpdated', { date: lastUpdated })}
      </Typography>
    </InfoCard>
  );
}

export default memo(BestSellingLocationTypeContainer);
