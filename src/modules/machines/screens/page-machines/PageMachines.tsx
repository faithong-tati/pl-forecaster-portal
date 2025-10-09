import { memo } from 'react';

import Button from '@/core/components/button';
import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';

function PageMachines() {
  return (
    <Panel>
      <ContentHeader
        title="Machine Management"
        renderNode={<Button variant="contained">Add Machine</Button>}
      />
    </Panel>
  );
}

export default memo(PageMachines);
