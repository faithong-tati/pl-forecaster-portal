import type { OptionT } from '@/core/types';
import type { ChangeEvent } from 'react';
import type { Path } from 'react-hook-form';

type ComponentType = 'input-text' | 'input-select';

export interface FormGeneratorProps<T extends Record<string, unknown>> {
  items: Array<{
    component: ComponentType;
    label: string;
    name: Path<T>;
    t(key: string): string;
    type: string;
    clamp?: number;
    onChange?(
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    ): void;
    options?: OptionT[];
    required?: boolean;
    slotProps?: unknown;
  }>;
}
