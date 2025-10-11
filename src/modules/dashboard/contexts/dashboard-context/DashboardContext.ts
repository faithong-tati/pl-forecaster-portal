import { createContext } from 'react';

import type { IDashboardContext } from './types';

const DashboardContext = createContext<IDashboardContext>({
  machines: [],
  lastUpdated: '',
  isLoading: false,
});

export default DashboardContext;
