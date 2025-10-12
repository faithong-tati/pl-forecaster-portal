import { Menu } from '@mui/icons-material';
import { Fade, IconButton, Stack, Typography } from '@mui/material';
import { memo, useContext } from 'react';

import AvatarBadge from '@/core/components/avatar-badge';
import AuthContext from '@/core/contexts/auth-context';
import { CoreSx } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { Header } from './styles';

function HamburgerMenu() {
  const { user } = useContext(AuthContext);
  const { state, onToggleDrawer } = useSidebar();

  return (
    <Header>
      <IconButton size="small" onClick={onToggleDrawer}>
        <Menu sx={CoreSx.hoverIcon} />
      </IconButton>

      <Fade in={state.isOpenSideBar} timeout={300} unmountOnExit>
        <Stack direction="row" alignItems="center" gap={rem(8)}>
          <AvatarBadge imageUrl={user?.imageUrl} />

          <Stack>
            <Typography variant="subtitle2">Super Admin</Typography>
            <Typography variant="caption" color="text.secondary">
              {user?.email}
            </Typography>
          </Stack>
        </Stack>
      </Fade>
    </Header>
  );
}

export default memo(HamburgerMenu);
