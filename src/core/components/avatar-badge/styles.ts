import { Badge as MuiBadge, styled } from '@mui/material';

import type { SxInlineStyles } from '@/core/types';

type SxKey = 'avatar';

export const Styles: SxInlineStyles<SxKey> = {
  avatar: {
    width: 40,
    height: 40,
    boxShadow: (theme) => `
      0 0 0 2px ${theme.palette.background.paper},
      0 0 8px 2px ${theme.palette.green[500]}80
    `,
  },
};

export const Badge = styled(MuiBadge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    'backgroundColor': theme.palette.green[500],
    'color': theme.palette.green[500],
    'boxShadow': `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
