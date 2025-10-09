import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import TextTruncate from '@/core/components/text-truncate';
import { formatDisplayDate } from '@/core/lib/helpers/format';
import { ButtonIcon } from '@/core/styles/common';
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
        accessorKey: 'name',
        header: t('table.columns.name'),
        minSize: 170,
        cell: ({ getValue }) => {
          return <TextTruncate>{getValue<string>() || '-'}</TextTruncate>;
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

          return <TextTruncate>{targetOption.label}</TextTruncate>;
        },
      },
      {
        accessorKey: 'expectedSalesPerDay',
        header: t('table.columns.expectedSalesPerDay'),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>{formatNumber(getValue<string>() || 0)}</TextTruncate>
          );
        },
      },
      {
        accessorKey: 'averageProfitMarginPercentage',
        header: t('table.columns.averageProfitMarginPercentage'),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>
              {formatNumber(getValue<string>() || 0, 2)}
            </TextTruncate>
          );
        },
      },
      {
        accessorKey: 'rentCostPerDay',
        header: t('table.columns.rentCostPerDay'),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>
              {formatNumber(getValue<string>() || 0, 2)}
            </TextTruncate>
          );
        },
      },
      {
        accessorKey: 'electricCostPerTempPerDay',
        header: t('table.columns.electricCostPerTempPerDay'),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>
              {formatNumber(getValue<string>() || 0, 2)}
            </TextTruncate>
          );
        },
      },
      {
        accessorKey: 'createdAt',
        header: t('table.columns.createdAt'),
        minSize: 170,
        cell: ({ getValue }) => {
          return formatDisplayDate(getValue<string>(), i18n.language as Locale);
        },
      },
      {
        accessorKey: 'createdBy',
        header: t('table.columns.createdBy'),
        minSize: 170,
        cell: ({ getValue }) => {
          return <TextTruncate>{getValue<string>() || '-'}</TextTruncate>;
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
        accessorKey: 'updatedBy',
        header: t('table.columns.updatedBy'),
        minSize: 170,
        cell: ({ getValue }) => {
          return <TextTruncate>{getValue<string>() || '-'}</TextTruncate>;
        },
      },
      {
        accessorKey: 'id',
        header: '',
        minSize: 40,
        cell: () => {
          return (
            <Box>
              <ButtonIcon>
                <EditIcon sx={{ color: (theme) => theme.palette.info.main }} />
              </ButtonIcon>

              <ButtonIcon>
                <DeleteIcon
                  sx={{ color: (theme) => theme.palette.error.main }}
                />
              </ButtonIcon>
            </Box>
          );
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
