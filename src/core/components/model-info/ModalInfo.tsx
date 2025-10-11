import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import InfoGrid from '@/core/components/info-grid';
import { BaseDialog } from '@/core/styles/common';
import rem from '@/core/utils/rem';

import type { ModalInfoProps } from './types';

function ModalInfo({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  isLoading,
  contents,
  children,
  fixHeight = true,
  severity = 'neutral',

  onClickPrimaryButton,
  onClickSecondaryButton,
  ...props
}: ModalInfoProps) {
  const { t } = useTranslation('core');

  return (
    <BaseDialog {...props}>
      <DialogTitle>
        <Stack gap={rem(4)}>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>

          {!!subtitle && <Typography variant="body2">{subtitle}</Typography>}
        </Stack>
      </DialogTitle>

      {(!!children || !!contents?.length) && (
        <DialogContent
          sx={{
            maxHeight: fixHeight ? rem(105) : undefined,
            overflowY: fixHeight ? 'auto' : 'hidden',
          }}
        >
          {children ? (
            <Fragment>{children}</Fragment>
          ) : (
            <InfoGrid datasource={contents || []} />
          )}
        </DialogContent>
      )}

      <DialogActions>
        <Stack direction="row" width="100%" gap={rem(16)}>
          <Button
            fullWidth
            variant="outlined"
            color={severity === 'warning' ? 'error' : 'primary'}
            onClick={onClickSecondaryButton}
          >
            {secondaryButtonText || t('buttons.cancel')}
          </Button>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color={severity === 'warning' ? 'error' : 'primary'}
            disabled={isLoading}
            onClick={onClickPrimaryButton}
          >
            {primaryButtonText || t('buttons.confirm')}
          </Button>
        </Stack>
      </DialogActions>
    </BaseDialog>
  );
}

export default memo(ModalInfo);
