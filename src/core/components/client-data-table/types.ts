/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ColumnDef,
  ColumnFiltersState,
  Table,
} from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';

export interface ClientDataTableProps<T = any> {
  columns: Array<ColumnDef<T>>;
  globalFilter: string;
  rows: T;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  columnFilters?: ColumnFiltersState;
  setColumnFilters?: Dispatch<SetStateAction<ColumnFiltersState>>;
}

export interface DataTableHeadProps {
  table: Table<any>;
}

export interface DataTableBodyProps extends DataTableHeadProps {
  rows: any[];
}

export interface DataTablePaginationProps<T = any> {
  pageIndex: number;
  pageSize: number;
  rows: T;
  table: Table<any>;
}

export interface EmptyStateProps {
  table: Table<any>;
  title: string;
}
