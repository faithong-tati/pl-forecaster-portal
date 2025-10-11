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
}: EmptyStateProps) {
  return (
    <Fade in timeout={fadeInTimeout}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={rem(16)}
        height={rem(250)}
        sx={{ color: 'text.secondary' }}
      >
        <Image alt={alt} src={iconPath} sx={{ width: rem(50) }} />
        <Typography variant="caption">{title}</Typography>
      </Stack>
    </Fade>
  );
}

export default memo(EmptyState);
