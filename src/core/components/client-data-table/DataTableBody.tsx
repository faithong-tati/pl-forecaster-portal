import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import useOptions from '@/core/hooks/use-options';

import DataTableEmptyState from './DataTableEmptyState';
import { getEmptyStateText } from './helpers';
import { Styles } from './styles';

import type { DataTableBodyProps, NativeFilter } from './types';

function DataTableBody({ table, rows: rawRows }: DataTableBodyProps) {
  const { t } = useTranslation('machine');
  const { locationTypeOptions } = useOptions();
  const rows = table.getRowModel().rows;

  if (!rawRows.length) {
    return <DataTableEmptyState title={t('table.noData')} table={table} />;
  }

  if (!rows.length) {
    const globalFilter: NativeFilter = table.getState().globalFilter || null;
    const columnFilter: NativeFilter =
      (table
        .getState()
        .columnFilters.find((filter) => filter.id === 'locationType')
        ?.value as string) || null;

    const locationType =
      locationTypeOptions.find((option) => option.value === columnFilter)
        ?.label ?? '-';

    const emptyStateText = getEmptyStateText(globalFilter, locationType, t);

    return <DataTableEmptyState title={emptyStateText} table={table} />;
  }

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id} hover sx={Styles.tableRow}>
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
