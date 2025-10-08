import type { AlertColor } from '@mui/material';

export interface IToastContext {
  onOpen(message: string, severity?: AlertColor): void;
}
