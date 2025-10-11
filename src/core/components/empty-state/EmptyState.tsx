import { Fade, Stack, Typography } from '@mui/material';
import { memo } from 'react';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';

import type { EmptyStateProps } from './types';

function EmptyState({
  alt,
  iconPath,
  title,
  fadeInTimeout = 700,
  height = 250,
  size = 'medium',
}: EmptyStateProps) {
  return (
    <Fade in timeout={fadeInTimeout}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={rem(16)}
        height={height}
        sx={{ color: 'text.secondary' }}
      >
        <Image
          alt={alt}
          src={iconPath}
          sx={{ width: size === 'large' ? rem(200) : rem(50) }}
        />
        <Typography variant={size === 'large' ? 'h5' : 'caption'}>
          {title}
        </Typography>
      </Stack>
    </Fade>
  );
}

export default memo(EmptyState);
