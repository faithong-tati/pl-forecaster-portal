import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

import type { ButtonProps } from './types';

export const BaseButton = styled(MuiButton)<ButtonProps>(() => ({
  textTransform: 'none',
  fontFamily: 'var(--font-ibm-thai)',
}));
