import { Box, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Drawer from '@/core/components/drawer';
import ModalInfo from '@/core/components/model-info/ModalInfo';
import FooterMenu from '@/modules/templates/components/footer-menu';
import HamburgerMenu from '@/modules/templates/components/hamburger-menu';
import NavigationMenu from '@/modules/templates/components/navigation-menu';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { DrawerContainer } from './styles';

function Sidebar() {
  const { t: tCore } = useTranslation('core');
  const { state, setState, width, onSignOut } = useSidebar();

  return (
    <DrawerContainer style={{ width }}>
      <Drawer open={state.isOpenSideBar}>
        <Stack flexDirection="column" height="100%">
          <HamburgerMenu />
          <NavigationMenu />
          <Box flex={1} />
          <FooterMenu />
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
