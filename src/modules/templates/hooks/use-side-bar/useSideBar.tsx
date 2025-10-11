import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { CookieAuth } from '@/core/lib/constants';
import { deleteCookie } from '@/core/lib/helpers';
import { useToast } from '@/core/providers/toast-provider/useToast';
import {
  CollapsedWidth,
  ExpandedWidth,
} from '@/modules/templates/components/sidebar/constants';
import SidebarContext from '@/modules/templates/contexts/auth-context';

export default function useSidebar() {
  const toast = useToast();
  const { t, i18n } = useTranslation('sidebar');
  const routerState = useRouterState();
  const navigate = useNavigate();
  const { state, setState } = useContext(SidebarContext);
  // const
  const width = useMemo(() => {
    return state.isOpenSideBar ? ExpandedWidth : CollapsedWidth;
  }, [state.isOpenSideBar]);

  const items = useMemo(() => {
    return [
      {
        icon: <DashboardIcon />,
        label: t('dashboard'),
        isActive: routerState.location.pathname.includes(Routes.dashboard.path),
        onClick: () =>
          navigate({
            to: `/$locale${Routes.dashboard.path}`,
            params: { locale: i18n.language },
          }),
      },
      {
        icon: <CoffeeMakerIcon />,
        label: t('machineMaker'),
        isActive: routerState.location.pathname.includes(Routes.machines.path),
        onClick: () =>
          navigate({
            to: `/$locale${Routes.machines.path}`,
            params: { locale: i18n.language },
          }),
      },
    ];
  }, [i18n.language, navigate, routerState.location.pathname, t]);

  // event
  const onToggleDrawer = useCallback(() => {
    setState((draft) => {
      draft.isOpenSideBar = !draft.isOpenSideBar;
    });
  }, [setState]);

  const onSignOut = useCallback(() => {
    try {
      deleteCookie(CookieAuth);

      setState((draft) => {
        draft.isOpenConfirmSignOutModal = false;
      });

      toast.onOpen('signOut.success', 'success');

      navigate({
        to: `/$locale${Routes.signIn.path}`,
        params: { locale: i18n.language },
      });
    } catch {
      toast.onOpen('signOut.failed', 'error');
    }
  }, [i18n.language, navigate, setState, toast]);

  return {
    state,
    setState,
    width,
    items,
    onToggleDrawer,
    onSignOut,
  };
}
