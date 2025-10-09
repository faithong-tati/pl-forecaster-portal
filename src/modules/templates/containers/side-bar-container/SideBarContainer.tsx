import { Box, CssBaseline, Stack } from '@mui/material';
import { Outlet } from '@tanstack/react-router';
import { memo } from 'react';

import Sidebar from '@/modules/templates/components/sidebar';

function SideBarContainer() {
  return (
    <Stack minHeight="100vh" bgcolor="background.default">
      <CssBaseline />

      <Box display="flex" minHeight="100dvh">
        <Sidebar />

        <Outlet />
      </Box>
    </Stack>
  );
}

export default memo(SideBarContainer);
