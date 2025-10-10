import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import rem from '@/core/utils/rem';

import EmptyState from './EmptyState';

import type { DataTableBodyProps } from './types';

function DataTableBody({ table, rows: rawRows }: DataTableBodyProps) {
  const { t } = useTranslation('machine');
  const rows = table.getRowModel().rows;

  if (!rawRows.length) {
    return <EmptyState title={t('table.noData')} table={table} />;
  }

  if (!rows.length) {
    return <EmptyState title={t('table.notFound')} table={table} />;
  }

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          hover
          sx={{
            'height': rem(50),
            '&:nth-of-type(even)': {
              bgcolor: (theme) => theme.palette.action.hover,
            },
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              sx={{
                maxWidth: cell.column.getSize(),
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
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

export default DataTableBody;
