import { memo } from 'react';

import DashboardContainer from '@/modules/dashboard/containers/dashboard-container';
import DashboardProvider from '@/modules/dashboard/providers/dashboard-provider';

function PageDashboard() {
  return (
    <DashboardProvider>
      <DashboardContainer />
    </DashboardProvider>
  );
}

export default memo(PageDashboard);
