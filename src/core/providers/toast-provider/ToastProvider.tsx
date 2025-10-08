import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useImmer } from 'use-immer';

import Snackbar from '@/core/components/snackbar';
import ToastContext from '@/core/contexts/toast-context';

import type { ToastProviderState } from './types';
import type { AlertColor, SnackbarCloseReason } from '@mui/material';
import type { PropsWithChildren, SyntheticEvent } from 'react';

function ToastProvider({ children }: PropsWithChildren) {
  const { t } = useTranslation('toast');
  const [toastState, setToastState] = useImmer<ToastProviderState>({
    open: false,
    title: '',
    severity: 'success',
  });

  const onOpen = useCallback(
    (title: string, severity: AlertColor) => {
      setToastState((draft) => {
        draft.open = true;
        draft.title = t(title);
        draft.severity = severity;
      });
    },
    [setToastState, t],
  );

  const onClose = useCallback(
    (_: SyntheticEvent, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') return;

      setToastState((draft) => {
        draft.open = false;
      });
    },
    [setToastState],
  );

  return (
    <ToastContext.Provider value={{ onOpen }}>
      {children}

      <Snackbar
        open={toastState.open}
        onClose={onClose}
        severity={toastState.severity}
        message={toastState.title}
      />
    </ToastContext.Provider>
  );
}

export default memo(ToastProvider);
