import { Grid, Typography } from '@mui/material';
import { memo, useMemo } from 'react';

import ContentSection from '@/core/components/content-section';
import Image from '@/core/components/image';
import InfoCard from '@/core/components/info-card';
import rem from '@/core/utils/rem';
import MetricCard from '@/modules/dashboard/components/metric-card';
import useSevenDayForecast from '@/modules/dashboard/hooks/use-seven-day-forecast';

function CumulativeWeeklyForecastContainer() {
  const { cumulative, lastUpdated, isLoading } = useSevenDayForecast();
  // const
  const data = useMemo(() => {
    return [
      {
        label: 'Total Revenue',
        value: cumulative.totalRevenue,
        icon: (
          <Image alt="revenue" src="/revenue.png" sx={{ width: rem(30) }} />
        ),
      },
      {
        label: 'Total Rent',
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
        label: 'Total Electricity Cost',
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
        label: 'Net P/L for the week',
        value: cumulative.netProfit,
        icon: <Image alt="profit" src="/profit.png" sx={{ width: rem(30) }} />,
      },
    ];
  }, [
    cumulative.netProfit,
    cumulative.totalElectricityCost,
    cumulative.totalRent,
    cumulative.totalRevenue,
  ]);

  return (
    <InfoCard title="Cumulative Weekly Forecast (7 days)">
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
            <Grid key={datum.label} size={{ xs: 3 }}>
              <MetricCard
                label={datum.label}
                value={datum.value}
                icon={datum.icon}
              />
            </Grid>
          ))}
        </Grid>
      </ContentSection>

      <Typography variant="caption" textAlign="right" color="secondary">
        Last updated: {lastUpdated}
      </Typography>
    </InfoCard>
  );
}

export default memo(CumulativeWeeklyForecastContainer);
