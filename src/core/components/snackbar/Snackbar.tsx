import { Alert, Snackbar as MuiSnackBar } from '@mui/material';
import { memo } from 'react';

import type { SnackbarProps } from './types';

function Snackbar({ onClose, severity, message, ...props }: SnackbarProps) {
  return (
    <MuiSnackBar
      {...props}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MuiSnackBar>
  );
}

export default memo(Snackbar);
