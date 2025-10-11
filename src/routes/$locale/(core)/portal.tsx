import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { useAuth } from '@/core/providers/auth-provider/useAuth';
import SideBarContainer from '@/modules/templates/containers/side-bar-container';

export const Route = createFileRoute('/$locale/(core)/portal')({
  component: memo(PortalLayoutRoute),
});

function PortalLayoutRoute() {
  const { authState } = useAuth();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  if (!authState.isAuth) {
    navigate({
      to: `/$locale${Routes.signIn.path}`,
      params: { locale: i18n.language },
    });
  }

  return <SideBarContainer />;
}
