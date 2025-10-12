import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'progress' | 'box';

export const Styles: SxInlineStyles<SxKeys> = {
  progress: {
    'height': rem(8),
    'borderRadius': 999,
    '& .MuiLinearProgress-bar': { borderRadius: 999 },
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(8),
  },
};
