import { styled, TextField } from '@mui/material';

import rem from '@/core/utils/rem';

export const BaseTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: rem(4),
  },
  '& .MuiFormLabel-asterisk': {
    color: theme.palette.error.main,
  },
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
}));
