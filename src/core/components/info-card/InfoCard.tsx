import { Box, Fade, Stack, Typography } from '@mui/material';
import { memo } from 'react';

import Image from '@/core/components/image';
import { BorderStack } from '@/core/styles/common';
import rem from '@/core/utils/rem';

import type { InfoCardProps } from './types';

function InfoCard({ title, render, children, iconPath }: InfoCardProps) {
  return (
    <Fade in timeout={700}>
      <BorderStack>
        <Box display="flex" justifyContent="space-between">
          <Stack direction="row" gap={rem(16)}>
            {iconPath && (
              <Image
                alt={iconPath}
                src={iconPath}
                sx={{ width: rem(30), height: rem(30) }}
              />
            )}

            <Typography variant="h6" fontWeight={500}>
              {title}
            </Typography>
          </Stack>

          {render}
        </Box>

        {children}
      </BorderStack>
    </Fade>
  );
}

export default memo(InfoCard);
