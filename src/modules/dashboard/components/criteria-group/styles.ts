import theme from '@/core/lib/theme';
import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'toggleButtonGroup' | 'motionDiv';

export const Styles: SxInlineStyles<SxKeys> = {
  toggleButtonGroup: {
    'position': 'relative',
    'display': 'inline-flex',
    'gap': rem(8),
    'border': (theme) => `1px solid ${theme.palette.secondary.light}`,
    'padding': rem(8),
    'borderRadius': 100,
    '& .MuiToggleButtonGroup-grouped': {
      'border': 0,
      'borderRadius': 100,
      'textTransform': 'none',
      'px': rem(16),
      'py': rem(8),
      'color': (theme) => theme.palette.secondary.dark,
      'transition': (theme) =>
        theme.transitions.create(['color'], {
          duration: theme.transitions.duration.shortest,
        }),
      '&.Mui-selected': {
        color: (theme) => theme.palette.primary.contrastText,
      },
    },
  },
  motionDiv: {
    position: 'absolute',
    top: rem(8),
    bottom: rem(8),
    left: 0,
    borderRadius: 100,
    background: theme.palette.primary.main,
    zIndex: 0,
  },
};
