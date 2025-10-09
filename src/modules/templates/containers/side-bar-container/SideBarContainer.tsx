import { Box, CssBaseline, Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { memo } from 'react';

import rem from '@/core/utils/rem';
import Sidebar from '@/modules/templates/components/sidebar';

function SideBarContainer() {
  return (
    <Stack minHeight="100vh" bgcolor="background.default">
      <CssBaseline />

      <Box display="flex" minHeight="100dvh">
        <Sidebar />

        <Stack p={rem(32)} width="100%">
          <Outlet />
        </Stack>
      </Box>
    </Stack>
  );
}

export default memo(SideBarContainer);
