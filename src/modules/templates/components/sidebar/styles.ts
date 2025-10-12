import { styled } from '@mui/material';

import rem from '@/core/utils/rem';

import { ExpandedWidth } from './constants';

export const DrawerContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  height: '100dvh',
  ['--sb-w']: rem(ExpandedWidth),
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}));
