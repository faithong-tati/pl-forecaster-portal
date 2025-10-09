import { Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputText from '@/core/components/input-text';

import type { FormGeneratorProps } from './types';

function FormGenerator<T extends Record<string, unknown>>({
  items,
}: FormGeneratorProps<T>) {
  const { control } = useFormContext();

  return (
    <Fragment>
      {items.map((item, index) => {
        if (item.component === 'input-text') {
          return (
            <Controller
              key={index}
              name={item.name}
              control={control}
              render={({ field, fieldState }) => (
                <InputText
                  {...field}
                  required
                  fullWidth
                  label={item.label}
                  type={item.type}
                  error={!!fieldState.error}
                  helperText={
                    !!fieldState.error && item.t(fieldState.error.message ?? '')
                  }
                  onChange={(e) => {
                    field.onChange(e);

                    item.onChange?.();
                  }}
                  slotProps={item.slotProps ?? undefined}
                />
              )}
            />
          );
        }
      })}
    </Fragment>
  );
}

export default FormGenerator;
