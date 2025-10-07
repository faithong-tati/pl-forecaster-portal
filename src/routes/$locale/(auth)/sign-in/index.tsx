import { createFileRoute } from '@tanstack/react-router';
import { memo } from 'react';

import PageSignIn from '@/core/modules/users/screens/page-sign-in';

export const Route = createFileRoute('/$locale/(auth)/sign-in/')({
  component: memo(SignInRoute),
});

function SignInRoute() {
  return <PageSignIn />;
}
