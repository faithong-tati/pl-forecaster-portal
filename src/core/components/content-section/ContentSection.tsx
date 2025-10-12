import { CircularProgress, Stack } from '@mui/material';
import { Fragment, memo } from 'react';

import EmptyState from '@/core/components/empty-state';
import rem from '@/core/utils/rem';

import type { ContentSectionProps } from './types';

function ContentSection({
  isLoading,
  hasData,
  alt,
  iconPath,
  emptyStateText,
  children,
  height,
}: ContentSectionProps) {
  if (!hasData) {
    return (
      <EmptyState
        alt={alt}
        iconPath={iconPath}
        title={emptyStateText}
        height={height}
      />
    );
  }

  if (isLoading) {
    return (
      <Stack
        height={height}
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress enableTrackSlot size={rem(40)} color="secondary" />
      </Stack>
    );
  }

  return <Fragment>{children}</Fragment>;
}

export default memo(ContentSection);
