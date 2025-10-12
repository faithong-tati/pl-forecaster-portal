import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import { Routes } from '@/core/constants';
import { CookieAuth } from '@/core/lib/constants';
import { deleteCookie } from '@/core/lib/helpers';
import { useToast } from '@/core/providers/toast-provider/useToast';
import rem from '@/core/utils/rem';
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
        icon: (
          <Image alt="dashboard" src="/dashboard.png" sx={{ width: rem(25) }} />
        ),
        label: t('dashboard'),
        isActive: routerState.location.pathname.includes(Routes.dashboard.path),
        onClick: () =>
          navigate({
            to: `/$locale${Routes.dashboard.path}`,
            params: { locale: i18n.language },
          }),
      },
      {
        icon: (
          <Image
            alt="vending-machine-yellow"
            src="/vending-machine-yellow.png"
            sx={{ ml: rem(-2), width: rem(30) }}
          />
        ),
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

      location.replace(`/${i18n.language}${Routes.signIn.path}`);
    } catch {
      toast.onOpen('signOut.failed', 'error');
    }
  }, [i18n.language, setState, toast]);

  return {
    state,
    setState,
    width,
    items,
    onToggleDrawer,
    onSignOut,
  };
}
