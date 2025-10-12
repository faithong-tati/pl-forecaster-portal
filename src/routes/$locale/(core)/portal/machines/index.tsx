import { createFileRoute } from '@tanstack/react-router';

import PageMachines from '@/modules/machines/screens/page-machines';

export const Route = createFileRoute('/$locale/(core)/portal/machines/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <PageMachines />;
}
