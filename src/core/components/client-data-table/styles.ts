import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys =
  | 'paper'
  | 'tableContainer'
  | 'paginationBox'
  | 'tableCellHeader'
  | 'tableRow';

export const Styles: SxInlineStyles<SxKeys> = {
  paper: {
    borderRadius: rem(16),
    overflow: 'auto',
    height: '100%',
    boxShadow: `0 ${rem(4)} ${rem(20)} rgba(0,0,0,0.1)`,
  },
  tableContainer: {
    height: 'calc(100% - 70px)',
    backgroundColor: 'white',
  },
  tableCellHeader: {
    backgroundColor: (theme) => theme.palette.secondary.main,
    fontWeight: 700,
    height: rem(50),
  },
  tableRow: {
    height: rem(50),
    backgroundColor: 'white',
  },
  paginationBox: {
    px: rem(16),
    py: rem(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: (theme) => theme.palette.grey[50],
    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
  },
};
