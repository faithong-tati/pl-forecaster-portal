import { Paper, Table, TableContainer } from '@mui/material';
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { memo, useState } from 'react';

import rem from '@/core/utils/rem';

import DataTableBody from './DataTableBody';
import DataTableHead from './DataTableHead';
import DataTablePagination from './DataTablePagination';

import type { ClientDataTableProps } from './types';

function ClientDataTable({ rows, columns }: ClientDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // hook
  const table = useReactTable({
    data: rows,
    columns,
    state: { sorting, pagination: { pageIndex, pageSize } },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Paper elevation={0} sx={{ borderRadius: rem(16), overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader size="small" aria-label="notification-grid">
          <DataTableHead table={table} />
          <DataTableBody table={table} />
        </Table>
      </TableContainer>

      <DataTablePagination
        table={table}
        rows={rows}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </Paper>
  );
}

export default memo(ClientDataTable);
