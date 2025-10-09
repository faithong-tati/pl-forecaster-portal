import { Box, styled } from '@mui/material';

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

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: rem(16),
  padding: `${rem(0)} ${rem(20)}`,
  height: rem(70),
  backgroundColor: theme.palette.secondary.main,
}));

export const Footer = styled(Box)(() => ({
  marginTop: 'auto',
  padding: rem(8),
}));
