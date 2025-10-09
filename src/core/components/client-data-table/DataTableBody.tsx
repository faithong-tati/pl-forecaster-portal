import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { memo } from 'react';

import type { DataTableBodyProps } from './types';

function DataTableBody({ table }: DataTableBodyProps) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          hover
          sx={{
            '&:nth-of-type(even)': {
              bgcolor: (theme) => theme.palette.action.hover,
            },
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell ?? ((info) => info.getValue()),
                cell.getContext(),
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default memo(DataTableBody);
