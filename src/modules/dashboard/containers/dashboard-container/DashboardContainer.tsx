import SyncIcon from '@mui/icons-material/Sync';
import { Grid } from '@mui/material';
import { memo, useContext } from 'react';

import Button from '@/core/components/button';
import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';
import CumulativeWeeklyForecastContainer from '@/modules/dashboard/containers/cumulative-weekly-forecast-container';
import SevenDaysForecastContainer from '@/modules/dashboard/containers/seven-days-forecast-container';
import DashboardContext from '@/modules/dashboard/contexts/dashboard-context';

function DashboardContainer() {
  const { refetchMachines } = useContext(DashboardContext);

  return (
    <Panel>
      <ContentHeader
        title="Forecaster Dashboard"
        renderNode={
          <Button
            color="info"
            startIcon={<SyncIcon />}
            onClick={() => refetchMachines?.()}
          >
            Sync
          </Button>
        }
      />

      <Grid container spacing={rem(32)}>
        <Grid size={{ xs: 12 }}>
          <BestSellingLocationType />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <SevenDaysForecastContainer />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <CumulativeWeeklyForecastContainer />
        </Grid>
      </Grid>
    </Panel>
  );
}

export default memo(DashboardContainer);
