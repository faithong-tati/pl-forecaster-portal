import { createFileRoute } from '@tanstack/react-router';

import SideBarContainer from '@/modules/templates/containers/side-bar-container';

export const Route = createFileRoute('/$locale/(core)/portal')({
  component: PortalLayoutRoute,
});

function PortalLayoutRoute() {
  return <SideBarContainer />;
}
