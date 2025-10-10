import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';

function DashboardContainer() {
  return (
    <Panel>
      <ContentHeader title="Forecaster Dashboard" />
    </Panel>
  );
}

export default memo(DashboardContainer);
