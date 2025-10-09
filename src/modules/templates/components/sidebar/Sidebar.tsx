import { LogoutRounded, Menu } from '@mui/icons-material';
import {
  Avatar,
  Box,
  IconButton,
  List,
  Stack,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Drawer from '@/core/components/drawer';
import ListItem from '@/core/components/list-item';
import { CoreSx } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { DrawerContainer, Footer, Header } from './styles';

function Sidebar() {
  const { t } = useTranslation('sidebar');
  const { open, width, items, toggleDrawer } = useSidebar();

  return (
    <DrawerContainer style={{ width }}>
      <Drawer open={open}>
        <Stack flexDirection="column" height="100%">
          <Header>
            <IconButton size="small" onClick={toggleDrawer}>
              <Menu sx={CoreSx.hoverIcon} />
            </IconButton>

            {open && (
              <Stack direction="row" alignItems="center" gap={rem(8)}>
                <Avatar
                  src="https://i.pravatar.cc/80?img=5"
                  sx={{ width: 40, height: 40 }}
                />

                <Stack>
                  <Typography variant="subtitle2">Super Admin</Typography>
                  <Typography variant="caption" color="text.secondary">
                    duckui@demo.com
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
                open={open}
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
                open={open}
                label={t('signOut')}
                icon={<LogoutRounded />}
                onClick={() => {}}
              />
            </List>
          </Footer>
        </Stack>
      </Drawer>
    </DrawerContainer>
  );
}

export default memo(Sidebar);
