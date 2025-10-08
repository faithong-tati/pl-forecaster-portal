import type { SupportedLocale } from '@/core/constants';

export type Locale = (typeof SupportedLocale)[number];

export interface BaseComponentProps {
  dataTestId?: string;
}
