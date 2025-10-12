import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKey = 'list';

export const Styles: SxInlineStyles<SxKey> = {
  list: {
    px: rem(8),
    display: 'flex',
    flexDirection: 'column',
    gap: rem(8),
  },
};
