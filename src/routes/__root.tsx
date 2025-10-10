import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Fragment, memo } from 'react';

function RootLayout() {
  return (
    <Fragment>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </Fragment>
  );
}

export const Route = createRootRoute({ component: memo(RootLayout) });
