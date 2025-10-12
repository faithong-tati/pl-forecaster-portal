import { Grid, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import ContentSection from '@/core/components/content-section';
import Image from '@/core/components/image';
import InfoCard from '@/core/components/info-card';
import rem from '@/core/utils/rem';
import MetricCard from '@/modules/dashboard/components/metric-card';
import useSevenDayForecast from '@/modules/dashboard/hooks/use-seven-day-forecast';

function CumulativeWeeklyForecastContainer() {
  const { cumulative, lastUpdated, isLoading } = useSevenDayForecast();
  const { t } = useTranslation('dashboard');
  // const
  const data = useMemo(() => {
    return [
      {
        id: 'total-revenue',
        label: t('cumulativeWeeklyForecast.cards.revenue'),
        value: cumulative.totalRevenue,
        icon: (
          <Image alt="revenue" src="/revenue.png" sx={{ width: rem(30) }} />
        ),
      },
      {
        id: 'total-rent',
        label: t('cumulativeWeeklyForecast.cards.totalRent'),
        value: cumulative.totalRent,
        icon: (
          <Image
            alt="vending-machine"
            src="/vending-machine.png"
            sx={{ width: rem(30) }}
          />
        ),
      },
      {
        id: 'total-electricity-cost',
        label: t('cumulativeWeeklyForecast.cards.totalElectricityCost'),
        value: cumulative.totalElectricityCost,
        icon: (
          <Image
            alt="electricity-bill"
            src="/electricity-bill.png"
            sx={{ width: rem(30) }}
          />
        ),
      },
      {
        id: 'net-profit-loss',
        label: t('cumulativeWeeklyForecast.cards.netProfitLoss'),
        value: cumulative.netProfit,
        icon: <Image alt="profit" src="/profit.png" sx={{ width: rem(30) }} />,
      },
    ];
  }, [
    cumulative.netProfit,
    cumulative.totalElectricityCost,
    cumulative.totalRent,
    cumulative.totalRevenue,
    t,
  ]);

  return (
    <InfoCard title={t('cumulativeWeeklyForecast.title')}>
      <ContentSection
        hasData
        height={122}
        isLoading={isLoading}
        alt=""
        iconPath=""
        emptyStateText=""
      >
        <Grid container spacing={rem(24)}>
          {data.map((datum) => (
            <Grid key={datum.label} size={{ xs: 6, lg: 3 }}>
              <MetricCard
                criteria={datum.id}
                label={datum.label}
                value={datum.value}
                icon={datum.icon}
              />
            </Grid>
          ))}
        </Grid>
      </ContentSection>

      <Typography variant="caption" textAlign="right" color="secondary">
        {t('shared.lastUpdated', { date: lastUpdated })}
      </Typography>
    </InfoCard>
  );
}

export default memo(CumulativeWeeklyForecastContainer);
