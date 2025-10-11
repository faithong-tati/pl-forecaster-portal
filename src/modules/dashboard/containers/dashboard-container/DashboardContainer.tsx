import { Grid } from '@mui/material';
import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';

function DashboardContainer() {
  return (
    <Panel>
      <ContentHeader title="Forecaster Dashboard" />

      <Grid container>
        <Grid size={{ xs: 12 }}>
          <BestSellingLocationType />
        </Grid>
      </Grid>
    </Panel>
  );
}

export default memo(DashboardContainer);
