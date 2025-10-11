import { Typography } from '@mui/material';
import { memo } from 'react';

import InfoCard from '@/core/components/info-card';

function CumulativeWeeklyForecastContainer() {
  return (
    <InfoCard title="Cumulative Weekly Forecast">
      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated:
      </Typography>
    </InfoCard>
  );
}

export default memo(CumulativeWeeklyForecastContainer);
