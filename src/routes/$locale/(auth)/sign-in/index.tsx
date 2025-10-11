import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { useAuth } from '@/core/providers/auth-provider/useAuth';
import PageSignIn from '@/modules/users/screens/page-sign-in';

export const Route = createFileRoute('/$locale/(auth)/sign-in/')({
  component: memo(SignInRoute),
});

function SignInRoute() {
  const { authState } = useAuth();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  if (authState.isAuth) {
    navigate({
      to: `/$locale${Routes.dashboard.path}`,
      params: { locale: i18n.language },
    });
  }

  return <PageSignIn />;
}
