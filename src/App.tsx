import { createRouter, RouterProvider } from '@tanstack/react-router';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { useAuth } from '@/core/providers/auth-provider/useAuth';

import { routeTree } from './routeTree.gen';

import './App.css';

function App() {
  const { authState } = useAuth();
  const { i18n } = useTranslation();

  return (
    <RouterProvider
      router={createRouter({
        routeTree,
        defaultNotFoundComponent: () => {
          window.location.href = `/${i18n.language}${Routes.dashboard.path}`;
        },
        context: { authState },
      })}
    />
  );
}

export default memo(App);
