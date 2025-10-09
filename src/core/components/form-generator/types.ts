import type { Path } from 'react-hook-form';

type ComponentType = 'input-text';

export interface FormGeneratorProps<T extends Record<string, unknown>> {
  items: Array<{
    name: Path<T>;
    component: ComponentType;
    type: string;
    label: string;
    t(key: string): string;
    onChange?(): void;
    slotProps?: unknown;
  }>;
}
