import type { OptionT } from '@/core/types';
import type { ChangeEvent } from 'react';
import type { Path } from 'react-hook-form';

type ComponentType = 'input-text' | 'input-select';

export interface FormGeneratorProps<T extends Record<string, unknown>> {
  items: Array<{
    name: Path<T>;
    component: ComponentType;
    type: string;
    label: string;
    t(key: string): string;
    onChange?(
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    ): void;
    slotProps?: unknown;
    required?: boolean;
    options?: OptionT[];
  }>;
}
