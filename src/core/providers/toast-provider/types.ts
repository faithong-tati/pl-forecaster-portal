import type { AlertColor } from '@mui/material';

export interface ToastProviderState {
  open: boolean;
  severity: AlertColor;
  title: string;
}
