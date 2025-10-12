import { TableBody, TableCell, TableRow } from '@mui/material';

import EmptyState from '@/core/components/empty-state';

import type { DataTableEmptyStateProps } from './types';

function DataTableEmptyState({ title, table }: DataTableEmptyStateProps) {
  const colSpan = table.getAllLeafColumns().length || 1;

  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan} sx={{ p: 0, border: 0 }}>
          <EmptyState
            alt="vending-machine"
            iconPath="/vending-machine.png"
            title={title}
            fadeInTimeout={300}
            height={300}
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default DataTableEmptyState;
