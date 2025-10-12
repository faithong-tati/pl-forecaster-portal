import { Paper, Table, TableContainer } from '@mui/material';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import DataTableBody from './DataTableBody';
import DataTableHead from './DataTableHead';
import DataTablePagination from './DataTablePagination';
import { Styles } from './styles';

import type { ClientDataTableProps } from './types';

function ClientDataTable({
  columnFilters,
  columns,
  globalFilter,
  rows,
  setColumnFilters,
  setGlobalFilter,
}: ClientDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'updatedAt', desc: true },
  ]);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // hook
  const table = useReactTable({
    data: rows,
    columns,
    state: {
      sorting,
      pagination: { pageIndex, pageSize },
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: 'includesString',
  });

  return (
    <Paper elevation={0} sx={Styles.paper}>
      <TableContainer sx={Styles.tableContainer}>
        <Table stickyHeader size="small" aria-label="notification-grid">
          <DataTableHead table={table} />
          <DataTableBody table={table} rows={rows} />
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

export default ClientDataTable;
