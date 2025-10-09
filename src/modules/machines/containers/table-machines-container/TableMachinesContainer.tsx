import { memo } from 'react';

import Button from '@/core/components/button';
import ClientDataGrid from '@/core/components/client-data-table';
import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import useTableMachines from '@/modules/machines/hooks/use-table-machines';

function TableMachinesContainer() {
  const { rows, columns } = useTableMachines();

  return (
    <Panel>
      <ContentHeader
        title="Machine Management"
        renderNode={<Button variant="contained">Add Machine</Button>}
      />

      <ClientDataGrid rows={rows} columns={columns} />
    </Panel>
  );
}

export default memo(TableMachinesContainer);
