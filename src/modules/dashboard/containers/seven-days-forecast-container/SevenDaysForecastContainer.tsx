import { Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import ContentSection from '@/core/components/content-section';
import InfoCard from '@/core/components/info-card';
import LineChart from '@/modules/dashboard/components/line-chart';
import useSevenDayForecast from '@/modules/dashboard/hooks/use-seven-day-forecast';

function SevenDaysForecastContainer() {
  const { t } = useTranslation('dashboard');
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
        name: t('sevenDayForecast.legends.electricity'),
        data: electricityCostSeries,
        offset0: 'rgba(77, 150, 255, 0.30)',
        offset1: 'rgba(77, 150, 255, 0.00)',
      },
      {
        key: 'p/l',
        name: t('sevenDayForecast.legends.profitLoss'),
        data: profitLossSeries,
        offset0: 'rgba(255, 217, 61, 0.30)',
        offset1: 'rgba(255, 217, 61, 0.00)',
      },
    ];
  }, [electricityCostSeries, profitLossSeries, t]);

  return (
    <InfoCard title={t('sevenDayForecast.title')}>
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
        {t('shared.lastUpdated', { date: lastUpdated })}
      </Typography>
    </InfoCard>
  );
}

export default memo(SevenDaysForecastContainer);
