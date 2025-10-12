import type { ReactNode } from 'react';

export interface InfoCardProps {
  children: ReactNode;
  title: string;
  render?: ReactNode;
}
