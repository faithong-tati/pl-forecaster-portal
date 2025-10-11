import { Typography } from '@mui/material';
import { memo, useMemo } from 'react';

import InfoCard from '@/core/components/info-card';
import LineChart from '@/modules/dashboard/components/line-chart';
import useSevenDaysForecast from '@/modules/dashboard/hooks/use-seven-days-forecast';

function SevenDaysForecastContainer() {
  const {
    series: { electricityCostSeries, profitLossSeries },
    xAisData,
    lastUpdated,
  } = useSevenDaysForecast();

  const chartSeries = useMemo(() => {
    return [
      {
        key: 'electricity',
        name: 'Electricity cost',
        data: electricityCostSeries,
        offset0: 'rgba(77, 150, 255, 0.30)',
        offset1: 'rgba(77, 150, 255, 0.00)',
      },
      {
        key: 'p/l',
        name: 'P/L',
        data: profitLossSeries,
        offset0: 'rgba(255, 217, 61, 0.30)',
        offset1: 'rgba(255, 217, 61, 0.00)',
      },
    ];
  }, [electricityCostSeries, profitLossSeries]);

  return (
    <InfoCard title="7-day Forecast">
      <LineChart xAxisData={xAisData} series={chartSeries} />

      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated: {lastUpdated}
      </Typography>
    </InfoCard>
  );
}

export default memo(SevenDaysForecastContainer);
