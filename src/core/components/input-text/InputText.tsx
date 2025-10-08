import { BaseTextField } from './styles';

import type { InputTextProps } from './types';

export default function InputText({
  label,
  size = 'medium',
  dataTestId = 'input-text',
  sx = {},
  ...props
}: InputTextProps) {
  return (
    <BaseTextField
      {...props}
      data-testid={dataTestId}
      sx={sx}
      variant="outlined"
      label={label}
      size={size}
    />
  );
}
