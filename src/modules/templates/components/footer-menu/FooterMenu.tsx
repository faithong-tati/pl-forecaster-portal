import { LogoutRounded } from '@mui/icons-material';
import { Divider, Fade, List, Stack, Tooltip } from '@mui/material';
import { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import AvatarBadge from '@/core/components/avatar-badge';
import ListItem from '@/core/components/list-item';
import AuthContext from '@/core/contexts/auth-context';
import rem from '@/core/utils/rem';
import useSidebar from '@/modules/templates/hooks/use-side-bar';

import { Footer } from './styles';

function FooterMenu() {
  const { t } = useTranslation('sidebar');
  const { user } = useContext(AuthContext);
  const { state, setState } = useSidebar();

  return (
    <Footer>
      <List disablePadding>
        <Fade in={!state.isOpenSideBar} timeout={300} unmountOnExit>
          <Tooltip title={user?.email} placement="right">
            <Stack direction="row" alignItems="center" ml={rem(8)} mb={rem(8)}>
              <AvatarBadge imageUrl={user?.imageUrl} />
            </Stack>
          </Tooltip>
        </Fade>

        <Divider />

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
  );
}

export default memo(FooterMenu);
