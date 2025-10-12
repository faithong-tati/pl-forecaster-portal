import type { EmptyStateProps } from '@/core/components/empty-state/types';
import type { ReactNode } from 'react';

export interface ContentSectionProps extends Omit<EmptyStateProps, 'title'> {
  children: ReactNode;
  emptyStateText: string;
  hasData: boolean;
  isLoading: boolean;
}
