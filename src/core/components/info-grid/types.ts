import type { ReactNode } from 'react';

export interface InfoGridData {
  key: string;
  value: string | ReactNode;
  centerKey?: boolean;
  styleConfig?: {
    gridKeySize?: number;
    gridValueSize?: number;
    textKeyFontColor?: string;
    textKeyFontWeight?: number;
    textValueFontColor?: string;
    textValueFontWeight?: number;
  };
}

export interface InfoGridProps {
  datasource: InfoGridData[];
}
