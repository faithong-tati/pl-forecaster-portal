'use client';

import { memo } from 'react';

import { BaseButton } from './styles';

import type { ButtonProps } from './types';

function Button({ dataTestId = 'button', ...props }: ButtonProps) {
  return <BaseButton {...props} data-testid={dataTestId} />;
}

export default memo(Button);
