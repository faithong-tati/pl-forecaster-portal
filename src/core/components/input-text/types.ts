import type { BaseComponentProps } from '@/core/types/common';
import type { TextFieldProps } from '@mui/material';

type CustomTextFieldProps = Omit<TextFieldProps, 'variant'>;

export interface InputTextProps
  extends BaseComponentProps,
    CustomTextFieldProps {}
