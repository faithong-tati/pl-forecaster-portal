import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { formatDisplayDate } from '@/core/lib/helpers/format';
import { LocationType } from '@/core/types/models/machine.model';
import { formatNumber } from '@/core/utils';
import { useGetMachines } from '@/modules/machines/hooks/api/use-get-machines';
import useOptions from '@/modules/machines/hooks/use-options';

import type { Locale } from '@/core/types';
import type { TableMachineColumnDef } from '@/modules/machines/containers/table-machines-container/types';
import type { ColumnDef, ColumnFiltersState } from '@tanstack/react-table';

export default function useTableMachines() {
  const { t, i18n } = useTranslation('machine');
  // state
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: 'locationType',
      value: '',
    },
  ]);

  // async hooks
  const { data } = useGetMachines();
  // const
  const { locationTypeOptions } = useOptions();
  const columns = useMemo<Array<ColumnDef<TableMachineColumnDef>>>(() => {
    return [
      {
        accessorKey: 'createdAt',
        header: t('table.columns.createdAt'),
        minSize: 170,
        cell: ({ getValue }) => {
          return formatDisplayDate(getValue<string>(), i18n.language as Locale);
        },
      },
      {
        accessorKey: 'updatedAt',
        header: t('table.columns.updatedAt'),
        minSize: 170,
        cell: ({ getValue }) => {
          return formatDisplayDate(getValue<string>(), i18n.language as Locale);
        },
      },
      {
        accessorKey: 'name',
        header: t('table.columns.name'),
        minSize: 170,
        cell: ({ getValue }) => {
          return getValue<string>() || '-';
        },
      },
      {
        accessorKey: 'locationType',
        header: t('table.columns.locationType'),
        cell: ({ getValue }) => {
          const targetOption = locationTypeOptions.find(
            (option) => option.value === getValue<LocationType>(),
          );

          if (!targetOption) return '-';

          return targetOption.label;
        },
      },
      {
        accessorKey: 'expectedSalesPerDay',
        header: t('table.columns.expectedSalesPerDay'),
        cell: ({ getValue }) => {
          return formatNumber(getValue<string>() || 0);
        },
      },
      {
        accessorKey: 'averageProfitMarginPercentage',
        header: t('table.columns.averageProfitMarginPercentage'),
        cell: ({ getValue }) => {
          return formatNumber(getValue<string>() || 0, 2);
        },
      },
      {
        accessorKey: 'rentCostPerDay',
        header: t('table.columns.rentCostPerDay'),
        cell: ({ getValue }) => {
          return formatNumber(getValue<string>() || 0, 2);
        },
      },
      {
        accessorKey: 'electricCostPerTempPerDay',
        header: t('table.columns.electricCostPerTempPerDay'),
        cell: ({ getValue }) => {
          return formatNumber(getValue<string>() || 0, 2);
        },
      },
    ];
  }, [i18n.language, locationTypeOptions, t]);

  return {
    rows: data ?? [],
    columns,
    locationTypeOptions,

    globalFilter,
    columnFilters,
    setGlobalFilter,
    setColumnFilters,
  };
}
