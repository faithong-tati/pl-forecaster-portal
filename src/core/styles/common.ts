import { Paper, styled } from '@mui/material';

import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';
import type { PaperProps } from '@mui/material';

export const Panel = styled(Paper)<PaperProps>(() => ({
  borderRadius: rem(16),
  padding: rem(32),
  backgroundColor: 'white',
  margin: '0 auto',
  boxShadow: `0 ${rem(4)} ${rem(20)} rgba(0,0,0,0.1)`,

  display: 'flex',
  flexDirection: 'column',
  gap: rem(32),
  width: '100%',
}));

type CoreSx = 'hoverIcon';

export const CoreSx: SxInlineStyles<CoreSx> = {
  hoverIcon: {
    'transition': 'transform 0.1s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      color: 'primary.main',
    },
  },
};
