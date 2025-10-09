import type { InfoGridData } from '@/core/components/info-grid/types';
import type { DialogProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

export interface ModalInfoProps extends DialogProps, PropsWithChildren {
  onClickPrimaryButton(): void;
  onClickSecondaryButton(): void;
  title: string;
  contents?: InfoGridData[];
  fixHeight?: boolean;
  isLoading?: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  subtitle?: string;
}
