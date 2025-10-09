import { Autocomplete } from '@mui/material';
import { memo } from 'react';

import InputText from '@/core/components/input-text';

import type { InputSelectProps } from './types';

function InputSelect({
  error,
  helperText,
  label,
  options,
  value,
  required,
  dataTestId = 'input-select',
  disableClearable = true,
  ...props
}: InputSelectProps) {
  return (
    <Autocomplete
      {...props}
      data-testid={dataTestId}
      value={value ?? null}
      disablePortal
      disableClearable={disableClearable}
      isOptionEqualToValue={(opt, val) => opt.value === val.value}
      getOptionLabel={(opt) => opt.label ?? ''}
      options={options}
      renderInput={(params) => (
        <InputText
          {...params}
          error={error}
          helperText={helperText}
          label={label}
          required={required}
        />
      )}
    />
  );
}

export default memo(InputSelect);
