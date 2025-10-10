import { Dialog, IconButton, Paper, Stack, styled } from '@mui/material';

import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';
import type { DialogProps, PaperProps, StackProps } from '@mui/material';

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
  height: '100%',
}));

type CoreSx = 'hoverIcon';

export const CoreSx: SxInlineStyles<CoreSx> = {
  hoverIcon: {
    'transition': 'transform 0.1s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      color: (theme) => theme.palette.primary.main,
    },
  },
};

export const BaseDialog = styled(Dialog)<DialogProps>(() => ({
  '& .MuiDialog-paper': {
    borderRadius: rem(24),
    padding: rem(36),
    gap: rem(24),
    width: rem(460),
  },
  '& .MuiDialogTitle-root': {
    padding: 0,
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiDialogActions-root': {
    padding: 0,
  },
}));

export const ButtonIcon = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'none',
})<{ disabled?: boolean }>(({ disabled, theme }) => ({
  'fill': theme.palette.secondary.main,
  'pointerEvents': disabled ? 'none' : 'auto',
  '& .MuiSvgIcon-root': {
    ...(disabled && {
      fill: theme.palette.text.disabled,
    }),
  },
}));

export const BorderStack = styled(Stack)<StackProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: rem(8),
  padding: rem(32),
  gap: rem(32),
}));
