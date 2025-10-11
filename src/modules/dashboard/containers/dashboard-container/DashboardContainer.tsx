import { Grid } from '@mui/material';
import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';
import SevenDaysForecastContainer from '@/modules/dashboard/containers/seven-days-forecast-container';
import DashboardProvider from '@/modules/dashboard/providers/dashboard-provider';

function DashboardContainer() {
  return (
    <Panel>
      <ContentHeader title="Forecaster Dashboard" />

      <DashboardProvider>
        <Grid container spacing={rem(32)}>
          <Grid size={{ xs: 12 }}>
            <BestSellingLocationType />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <SevenDaysForecastContainer />
          </Grid>
        </Grid>
      </DashboardProvider>
    </Panel>
  );
}

export default memo(DashboardContainer);
