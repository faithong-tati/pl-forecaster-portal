import { createFileRoute, redirect } from '@tanstack/react-router';
import { memo } from 'react';

import { DefaultLocale, Routes } from '@/core/constants';

export const Route = createFileRoute('/$locale/(core)/portal/')({
  beforeLoad: () => {
    throw redirect({ to: `/${DefaultLocale}${Routes.dashboard.path}` });
  },
  component: memo(PostalRoute),
});

function PostalRoute() {
  return null;
}
