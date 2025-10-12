import { Stack, Typography } from '@mui/material';
import { memo, useMemo } from 'react';

import { BorderStack } from '@/core/styles/common';
import { formatNumber } from '@/core/utils';
import rem from '@/core/utils/rem';

import type { MetricCardProps } from './types';

function MetricCard({ criteria, label, value, icon }: MetricCardProps) {
  const fontColor = useMemo(() => {
    if (criteria !== 'net-profit-loss') {
      return 'text.primary';
    }

    return value < 0 ? 'error' : 'success';
  }, [criteria, value]);

  return (
    <BorderStack direction="row" alignItems="center" height={rem(100)}>
      {icon}
      <Stack>
        <Typography variant="body1">{label}</Typography>
        <Typography variant="h6" color={fontColor}>
          ฿ {formatNumber(value, 2)}
        </Typography>
      </Stack>
    </BorderStack>
  );
}

export default memo(MetricCard);
