import type { BaseComponentProps, OptionT } from '@/core/types';
import type { AutocompleteProps } from '@mui/material';

type CustomAutocompleteProps = Omit<
  AutocompleteProps<OptionT, false, boolean, false>,
  | 'clearIcon'
  | 'getOptionLabel'
  | 'isOptionEqualToValue'
  | 'renderInput'
  | 'renderOption'
>;

export interface InputSelectProps
  extends BaseComponentProps,
    CustomAutocompleteProps {
  error?: boolean;
  helperText?: string;
  label?: string;
  required?: boolean;
}
