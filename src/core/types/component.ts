import type { SxProps, Theme } from '@mui/material';

export type SxInlineStyles<T extends PropertyKey = string> = {
  [K in T]: SxProps<Theme>;
};
