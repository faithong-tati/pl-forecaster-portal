import { memo } from 'react';

import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import BestSellingLocationType from '@/modules/dashboard/containers/best-selling-location-type-container';

function DashboardContainer() {
  return (
    <Panel>
      <ContentHeader title="Forecaster Dashboard" />
      <BestSellingLocationType />
    </Panel>
  );
}

export default memo(DashboardContainer);
