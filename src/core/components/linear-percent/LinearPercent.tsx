import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import { memo } from 'react';

import { Styles } from './styles';

import type { LinearPercentProps } from './types';

function LinearPercent({
  color,
  label,
  value,
  fontWeight = 700,
  variant,
}: LinearPercentProps) {
  return (
    <Stack spacing={1}>
      <Box sx={Styles.box}>
        <Typography
          variant="body2"
          color={color}
          fontWeight={fontWeight}
          textAlign="center"
        >
          {label}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={Styles.progress}
        color={variant}
      />
    </Stack>
  );
}

export default memo(LinearPercent);
