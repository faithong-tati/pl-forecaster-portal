import type { ReactNode } from 'react';

export interface MetricCardProps {
  criteria: string;
  icon: ReactNode;
  label: string;
  value: number;
}
