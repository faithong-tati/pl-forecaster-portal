import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

import rem from '@/core/utils/rem';

import type { ContentHeaderProps } from './types';

function ContentHeader({ title, renderNode }: ContentHeaderProps) {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="space-between"
      gap={rem(16)}
    >
      <Typography variant="h4">{title}</Typography>
      {renderNode}
    </Stack>
  );
}

export default memo(ContentHeader);
