import { Box, Typography } from '@mui/material';
import { memo } from 'react';

import { BorderStack } from '@/core/styles/common';

import type { InfoCardProps } from './types';

function InfoCard({ title, render, children }: InfoCardProps) {
  return (
    <BorderStack>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" fontWeight={500}>
          {title}
        </Typography>

        {render}
      </Box>

      {children}
    </BorderStack>
  );
}

export default memo(InfoCard);
