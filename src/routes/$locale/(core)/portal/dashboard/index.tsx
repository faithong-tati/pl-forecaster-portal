import { createFileRoute } from '@tanstack/react-router';

import PageDashboard from '@/modules/dashboard/screens/page-dashboard';

export const Route = createFileRoute('/$locale/(core)/portal/dashboard/')({
  component: DashboardRoute,
});

function DashboardRoute() {
  return <PageDashboard />;
}
