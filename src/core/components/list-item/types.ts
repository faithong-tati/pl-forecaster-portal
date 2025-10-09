import type { ReactNode } from 'react';

export interface ListItemProps {
  icon: ReactNode;
  isActive: boolean;
  label: string;
  open: boolean;
}
