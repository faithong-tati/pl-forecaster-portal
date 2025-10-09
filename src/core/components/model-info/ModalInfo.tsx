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

  onClickPrimaryButton,
  onClickSecondaryButton,
  ...props
}: ModalInfoProps) {
  const { t } = useTranslation('core');

  return (
    <BaseDialog {...props}>
      <DialogTitle>
        <Stack gap={rem(4)}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            {title}
          </Typography>

          {!!subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
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
            color="error"
            onClick={onClickSecondaryButton}
          >
            {secondaryButtonText || t('buttons.cancel')}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="error"
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
