import { Grid } from '@mui/material';
import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';
import TopMachineContainer from '@/modules/dashboard/containers/top-machines-container';
import DashboardProvider from '@/modules/dashboard/providers/dashboard-provider';

function DashboardContainer() {
  return (
    <Panel>
      <DashboardProvider>
        <ContentHeader title="Forecaster Dashboard" />

        <Grid container spacing={rem(24)}>
          <Grid size={{ xs: 8 }}>
            <BestSellingLocationType />
          </Grid>

          <Grid size={{ xs: 4 }}>
            <TopMachineContainer />
          </Grid>
        </Grid>
      </DashboardProvider>
    </Panel>
  );
}

export default memo(DashboardContainer);
