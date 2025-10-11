import { Grid } from '@mui/material';
import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';
import DashboardProvider from '@/modules/dashboard/providers/dashboard-provider';

function DashboardContainer() {
  return (
    <Panel>
      <DashboardProvider>
        <ContentHeader title="Forecaster Dashboard" />

        <Grid container>
          <Grid size={{ xs: 12 }}>
            <BestSellingLocationType />
          </Grid>
        </Grid>
      </DashboardProvider>
    </Panel>
  );
}

export default memo(DashboardContainer);
