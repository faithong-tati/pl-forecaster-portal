import type { ReactNode } from 'react';

export interface ListItemProps {
  icon: ReactNode;
  isActive: boolean;
  label: string;
  onClick(): Promise<void> | void;
  open: boolean;
}
