import { createFileRoute, redirect } from '@tanstack/react-router';
import { memo } from 'react';

import { Routes } from '@/core/constants';
import PageSignIn from '@/modules/users/screens/page-sign-in';

import type { IAuthContext } from '@/core/contexts/auth-context/types';

export const Route = createFileRoute('/$locale/(auth)/sign-in/')({
  beforeLoad: ({ context, params }) => {
    const $context = context as IAuthContext;

    if ($context.authState.isAuth) {
      throw redirect({ to: `/$locale${Routes.dashboard.path}`, params });
    }
  },
  component: memo(SignInRoute),
});

function SignInRoute() {
  return <PageSignIn />;
}
