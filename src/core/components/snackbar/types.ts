import type { BaseComponentProps } from '@/core/types';
import type {
  AlertColor,
  SnackbarProps as MuiSnackbarProps,
  SnackbarCloseReason,
} from '@mui/material';
import type { SyntheticEvent } from 'react';

export interface SnackbarProps extends MuiSnackbarProps, BaseComponentProps {
  onClose(event?: SyntheticEvent | Event, reason?: SnackbarCloseReason): void;
  severity: AlertColor;
}
