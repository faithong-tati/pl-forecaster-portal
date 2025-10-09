import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import {
  CollapsedWidth,
  ExpandedWidth,
} from '@/modules/templates/components/sidebar/constants';

export default function useSidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation('sidebar');
  const routerState = useRouterState();
  const navigate = useNavigate();
  // const
  const width = useMemo(() => {
    return open ? ExpandedWidth : CollapsedWidth;
  }, [open]);

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

  const toggleDrawer = useCallback(() => {
    setOpen((x) => !x);
  }, []);

  return {
    open,
    width,
    items,
    toggleDrawer,
  };
}
