import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

import type { ContentHeaderProps } from './types';

function ContentHeader({ title, renderNode }: ContentHeaderProps) {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="space-between"
    >
      <Typography variant="h4">{title}</Typography>
      {renderNode}
    </Stack>
  );
}

export default memo(ContentHeader);
