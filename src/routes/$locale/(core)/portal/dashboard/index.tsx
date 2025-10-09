import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/(core)/portal/dashboard/')({
  component: DashboardRoute,
});

function DashboardRoute() {
  return <div>Dashboard</div>;
}
