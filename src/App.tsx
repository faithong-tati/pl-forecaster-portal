import { createRouter, RouterProvider } from '@tanstack/react-router';
import { memo } from 'react';

import { routeTree } from './routeTree.gen';

import './App.css';

function App() {
  return <RouterProvider router={createRouter({ routeTree })} />;
}

export default memo(App);
