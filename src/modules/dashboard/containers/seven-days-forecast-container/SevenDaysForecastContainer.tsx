import { Typography } from '@mui/material';
import { memo, useMemo } from 'react';

import ContentSection from '@/core/components/content-section';
import InfoCard from '@/core/components/info-card';
import LineChart from '@/modules/dashboard/components/line-chart';
import useSevenDayForecast from '@/modules/dashboard/hooks/use-seven-day-forecast';

function SevenDaysForecastContainer() {
  const {
    series: { electricityCostSeries, profitLossSeries },
    xAisData,
    lastUpdated,
    isLoading,
  } = useSevenDayForecast();

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
      <ContentSection
        hasData
        height={360}
        isLoading={isLoading}
        alt=""
        iconPath=""
        emptyStateText=""
      >
        <LineChart xAxisData={xAisData} series={chartSeries} />
      </ContentSection>

      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated: {lastUpdated}
      </Typography>
    </InfoCard>
  );
}

export default memo(SevenDaysForecastContainer);
