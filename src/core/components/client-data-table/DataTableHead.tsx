import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { flexRender } from '@tanstack/react-table';

import { Styles } from './styles';

import type { DataTableHeadProps } from './types';

function DataTableHead({ table }: DataTableHeadProps) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const canSort = header.column.getCanSort();
            const sorted = header.column.getIsSorted();

            return (
              <TableCell
                key={header.id}
                sx={{
                  ...Styles.tableCellHeader,
                  minWidth: header.column.columnDef.minSize,
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
