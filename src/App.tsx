import { createRouter, RouterProvider } from '@tanstack/react-router';
import { memo } from 'react';

import EmptyState from '@/core/components/empty-state';
import { useAuth } from '@/core/providers/auth-provider/useAuth';

import { routeTree } from './routeTree.gen';

import './App.css';

function App() {
  const { authState } = useAuth();

  return (
    <RouterProvider
      router={createRouter({
        routeTree,
        defaultNotFoundComponent: () => {
          return (
            <EmptyState
              alt="404-error"
              iconPath="/404-error.png"
              title="Page Not Found"
              height={500}
              fadeInTimeout={500}
              size="large"
            />
          );
        },
        context: { authState },
      })}
    />
  );
}

export default memo(App);
