import { Box, CssBaseline, Divider, Stack, Typography } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';
import Sidebar from '@/modules/templates/components/sidebar';
import SidebarProvider from '@/modules/templates/providers/sidebar-provider';

function SideBarContainer() {
  const { t } = useTranslation('core');

  return (
    <Stack minHeight="100vh" bgcolor="background.default">
      <CssBaseline />

      <SidebarProvider>
        <Box display="flex" minHeight="100dvh">
          <Sidebar />

          <Stack
            p={rem(32)}
            width="100%"
            gap={rem(16)}
            height="100vh"
            overflow="hidden"
          >
            <Stack direction="row" alignItems="center">
              <Image alt="small-log" src="/logo.svg" sx={{ width: rem(48) }} />
              <Typography variant="h6">{t('system')}</Typography>
            </Stack>

            <Divider sx={{ alignContent: 'center' }} />

            <Outlet />
          </Stack>
        </Box>
      </SidebarProvider>
    </Stack>
  );
}

export default memo(SideBarContainer);
