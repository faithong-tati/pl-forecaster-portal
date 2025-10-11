import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Fragment, memo } from 'react';

function RootLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export const Route = createRootRoute({ component: memo(RootLayout) });
