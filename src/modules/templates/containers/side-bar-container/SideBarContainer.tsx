import CoffeeIcon from '@mui/icons-material/Coffee';
import { Box, CssBaseline, Divider, Stack, Typography } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';
import Sidebar from '@/modules/templates/components/sidebar';

function SideBarContainer() {
  const { t } = useTranslation('core');

  return (
    <Stack minHeight="100vh" bgcolor="background.default">
      <CssBaseline />

      <Box display="flex" minHeight="100dvh">
        <Sidebar />

        <Stack m={rem(32)} width="100%" gap={rem(16)}>
          <Stack direction="row" alignItems="center">
            <Image alt="small-log" src="/logo.svg" sx={{ width: rem(48) }} />
            <Typography variant="h6">{t('system')}</Typography>
          </Stack>

          <Divider sx={{ alignContent: 'center' }}>
            <CoffeeIcon
              sx={{
                display: 'flex',
                color: (theme) => theme.palette.secondary.main,
              }}
            />
          </Divider>

          <Outlet />
        </Stack>
      </Box>
    </Stack>
  );
}

export default memo(SideBarContainer);
