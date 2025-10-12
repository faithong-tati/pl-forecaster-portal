import type { LinearProgressProps } from '@mui/material';

export interface LinearPercentProps {
  color: string;
  value: number;
  fontWeight?: number;
  label?: string;
  variant?: LinearProgressProps['color'];
}
