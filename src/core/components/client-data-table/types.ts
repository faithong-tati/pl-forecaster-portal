/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColumnDef, Table } from '@tanstack/react-table';

export interface ClientDataTableProps<T = any> {
  columns: Array<ColumnDef<T>>;
  rows: T;
}

export interface DataTableHeadProps {
  table: Table<any>;
}

export type DataTableBodyProps = DataTableHeadProps;

export interface DataTablePaginationProps<T = any> {
  pageIndex: number;
  pageSize: number;
  rows: T;
  table: Table<any>;
}
