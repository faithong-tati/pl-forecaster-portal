import type { ColumnFiltersState } from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';

export interface FormSearchMachinesProps {
  columnFilters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
}
