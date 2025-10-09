import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

import type { TableMachineColumnDef } from '@/modules/machines/containers/table-machines-container/types';
import type { ColumnDef } from '@tanstack/react-table';

export default function useTableMachines() {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const rows = Array.from({ length: 148 }).map((_, i) => ({
    averageProfitMarginPercentage: '0.4',
    createdAt: dayjs().toISOString(),
    createdBy: 'admin',
    electricCostPerTempPerDay: '1.1',
    expectedSalesPerDay: '10',
    id: `1${i}`,
    locationType: 'SCHOOL',
    name: 'school',
    rentCostPerDay: '',
    updatedAt: dayjs().toISOString(),
    updatedBy: 'admin',
  })) as TableMachineColumnDef[];

  const columns = useMemo<Array<ColumnDef<TableMachineColumnDef>>>(() => {
    return [
      { accessorKey: 'createdAt', header: 'createdAt' },
      { accessorKey: 'updatedAt', header: 'updatedAt' },
      { accessorKey: 'name', header: 'name' },
      { accessorKey: 'locationType', header: 'locationType' },
      { accessorKey: 'expectedSalesPerDay', header: 'expectedSalesPerDay' },
      {
        accessorKey: 'averageProfitMarginPercentage',
        header: 'averageProfitMarginPercentage',
      },
      {
        accessorKey: 'electricCostPerTempPerDay',
        header: 'electricCostPerTempPerDay',
      },
    ];
  }, []);

  return {
    rows,
    columns,

    globalFilter,
    setGlobalFilter,
  };
}
