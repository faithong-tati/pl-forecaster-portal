import { Fragment, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import InputSelect from '@/core/components/input-select';
import InputText from '@/core/components/input-text';
import { RegexNonNumeric } from '@/core/lib/constants';

import { InvalidKeysTypeNumber } from './constants';
import { clamp } from './helpers';

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
                  required={item.required}
                  fullWidth
                  label={item.label}
                  type={item.type}
                  error={!!fieldState.error}
                  helperText={
                    !!fieldState.error && item.t(fieldState.error.message ?? '')
                  }
                  onChange={(e) => {
                    field.onChange(e);
                    item.onChange?.(e);
                  }}
                  onInput={(e) => {
                    if (item.type === 'number') {
                      const input = e.target as HTMLInputElement;

                      let value = input.value.replace(RegexNonNumeric, '');

                      if (value) {
                        value = clamp(Number(value), 0, item.clamp).toString();
                      }

                      input.value = value;
                    }
                  }}
                  onKeyDown={(e) => {
                    if (
                      item.type === 'number' &&
                      InvalidKeysTypeNumber.includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    if (item.type === 'number') {
                      const clipboardValue = e.clipboardData.getData('text');

                      if (InvalidKeysTypeNumber.includes(clipboardValue)) {
                        e.preventDefault();
                      }
                    }
                  }}
                  slotProps={item.slotProps ?? undefined}
                />
              )}
            />
          );
        }

        if (item.component === 'input-select') {
          return (
            <Controller
              key={index}
              name={item.name}
              control={control}
              render={({ field, fieldState }) => {
                const options = item.options ?? [];
                const fieldValue = options.find(
                  (option) => option.value === field.value,
                );

                return (
                  <InputSelect
                    required={item.required}
                    fullWidth
                    label={item.label}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error?.message
                        ? item.t(fieldState.error.message ?? '')
                        : ''
                    }
                    options={options}
                    value={fieldValue}
                    onChange={(_, newValue) => {
                      field.onChange(newValue?.value);
                      item.onChange?.(newValue?.value ?? '');
                    }}
                  />
                );
              }}
            />
          );
        }
      })}
    </Fragment>
  );
}

export default memo(FormGenerator);
