import { LogoutRounded, Menu } from '@mui/icons-material';
import {
  Avatar,
  Box,
  IconButton,
  List,
  Stack,
  Typography,
} from '@mui/material';
import { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Drawer from '@/core/components/drawer';
import ListItem from '@/core/components/list-item';
import ModalInfo from '@/core/components/model-info/ModalInfo';
import AuthContext from '@/core/contexts/auth-context';
import { CoreSx } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { DrawerContainer, Footer, Header } from './styles';

function Sidebar() {
  const { t } = useTranslation('sidebar');
  const { t: tCore } = useTranslation('core');
  const { state, setState, width, items, onToggleDrawer, onSignOut } =
    useSidebar();

  const { user } = useContext(AuthContext);

  return (
    <DrawerContainer style={{ width }}>
      <Drawer open={state.isOpenSideBar}>
        <Stack flexDirection="column" height="100%">
          <Header>
            <IconButton size="small" onClick={onToggleDrawer}>
              <Menu sx={CoreSx.hoverIcon} />
            </IconButton>

            {state.isOpenSideBar && (
              <Stack direction="row" alignItems="center" gap={rem(8)}>
                <Avatar src={user?.imageUrl} sx={{ width: 40, height: 40 }} />

                <Stack>
                  <Typography variant="subtitle2">Super Admin</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {user?.email}
                  </Typography>
                </Stack>
              </Stack>
            )}
          </Header>

          <List
            sx={{
              px: rem(8),
              display: 'flex',
              flexDirection: 'column',
              gap: rem(8),
            }}
          >
            {items.map((item, index) => (
              <ListItem
                key={index}
                isActive={item.isActive}
                open={state.isOpenSideBar}
                label={item.label}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
          </List>

          <Box flex={1} />

          <Footer>
            <List disablePadding>
              <ListItem
                isActive={false}
                open={state.isOpenSideBar}
                label={t('signOut')}
                icon={<LogoutRounded />}
                onClick={() =>
                  setState((draft) => {
                    draft.isOpenConfirmSignOutModal = true;
                  })
                }
              />
            </List>
          </Footer>
        </Stack>
      </Drawer>

      <ModalInfo
        open={state.isOpenConfirmSignOutModal}
        title={tCore('modals.signOut.title')}
        subtitle={tCore('modals.signOut.subtitle')}
        onClickPrimaryButton={onSignOut}
        onClickSecondaryButton={() =>
          setState((draft) => {
            draft.isOpenConfirmSignOutModal = false;
          })
        }
      />
    </DrawerContainer>
  );
}

export default memo(Sidebar);
