import type { ReactNode } from 'react';

export interface InfoCardProps {
  children: ReactNode;
  title: string;
  iconPath?: string;
  render?: ReactNode;
}
