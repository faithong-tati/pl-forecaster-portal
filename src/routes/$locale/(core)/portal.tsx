import { createFileRoute, redirect } from '@tanstack/react-router';

import { Routes } from '@/core/constants';
import SideBarContainer from '@/modules/templates/containers/side-bar-container';

import type { IAuthContext } from '@/core/contexts/auth-context/types';

export const Route = createFileRoute('/$locale/(core)/portal')({
  beforeLoad: ({ context, params }) => {
    const $context = context as IAuthContext;

    if (!$context.authState.isAuth) {
      throw redirect({ to: `/$locale${Routes.signIn.path}`, params });
    }
  },
  component: PortalLayoutRoute,
});

function PortalLayoutRoute() {
  return <SideBarContainer />;
}
