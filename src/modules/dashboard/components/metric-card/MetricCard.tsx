import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

import { BorderStack } from '@/core/styles/common';
import { formatNumber } from '@/core/utils';
import rem from '@/core/utils/rem';

import type { MetricCardProps } from './types';

function MetricCard({ label, value, icon }: MetricCardProps) {
  return (
    <BorderStack direction="row" alignItems="center" height={rem(100)}>
      {icon}
      <Stack>
        <Typography variant="body1">{label}</Typography>
        <Typography variant="h6" color={value < 0 ? 'error' : 'textPrimary'}>
          ฿ {formatNumber(value, 2)}
        </Typography>
      </Stack>
    </BorderStack>
  );
}

export default memo(MetricCard);
