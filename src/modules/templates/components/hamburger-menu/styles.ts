import { Box, styled } from '@mui/material';

import rem from '@/core/utils/rem';

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: rem(16),
  padding: `${rem(0)} ${rem(20)}`,
  height: rem(70),
  backgroundColor: theme.palette.secondary.main,
}));
