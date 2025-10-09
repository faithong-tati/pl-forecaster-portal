import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { flexRender } from '@tanstack/react-table';

import rem from '@/core/utils/rem';

import type { DataTableHeadProps } from './types';

function DataTableHead({ table }: DataTableHeadProps) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((hg) => (
        <TableRow key={hg.id} sx={{ '& th': { whiteSpace: 'nowrap' } }}>
          {hg.headers.map((header) => {
            const canSort = header.column.getCanSort();
            const sorted = header.column.getIsSorted();

            return (
              <TableCell
                key={header.id}
                sx={{
                  bgcolor: (theme) => theme.palette.secondary.main,
                  fontWeight: 700,
                  height: rem(50),
                }}
              >
                {canSort ? (
                  <TableSortLabel
                    active={!!sorted}
                    direction={sorted === 'desc' ? 'desc' : 'asc'}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableSortLabel>
                ) : (
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )
                )}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default DataTableHead;
