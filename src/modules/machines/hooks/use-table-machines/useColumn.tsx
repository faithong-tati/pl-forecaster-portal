import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import TextTruncate from '@/core/components/text-truncate';
import { formatDisplayDate } from '@/core/lib/helpers/format';
import { ButtonIcon } from '@/core/styles/common';
import { LocationType } from '@/core/types/models/machine.model';
import { formatNumber } from '@/core/utils';

import type { UseColumnProps } from './types';
import type { Locale } from '@/core/types';
import type { TableMachineColumnDef } from '@/modules/machines/containers/table-machines-container/types';
import type { ColumnDef } from '@tanstack/react-table';

export function useColumn({
  locationTypeOptions,
  setModalState,
}: UseColumnProps) {
  const { t, i18n } = useTranslation('machine');
  // const
  const columns = useMemo<Array<ColumnDef<TableMachineColumnDef>>>(() => {
    return [
      {
        accessorKey: 'name',
        header: t('table.columns.name'),
        minSize: 150,
        cell: ({ getValue }) => {
          return <TextTruncate>{getValue<string>() || '-'}</TextTruncate>;
        },
      },
      {
        accessorKey: 'locationType',
        header: t('table.columns.locationType'),
        minSize: 150,
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
        minSize: 150,
        accessorFn: (row) => Number(row.expectedSalesPerDay),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>{formatNumber(getValue<string>() || 0)}</TextTruncate>
          );
        },
      },
      {
        accessorKey: 'averageProfitMarginPercentage',
        header: t('table.columns.averageProfitMarginPercentage'),
        minSize: 150,
        accessorFn: (row) => Number(row.averageProfitMarginPercentage),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>
              {formatNumber(getValue<string>() || 0)} %
            </TextTruncate>
          );
        },
      },
      {
        accessorKey: 'rentCostPerDay',
        header: t('table.columns.rentCostPerDay'),
        minSize: 150,
        accessorFn: (row) => Number(row.rentCostPerDay),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>{formatNumber(getValue<string>() || 0)}</TextTruncate>
          );
        },
      },
      {
        accessorKey: 'electricCostPerTempPerDay',
        header: t('table.columns.electricCostPerTempPerDay'),
        minSize: 150,
        accessorFn: (row) => Number(row.electricCostPerTempPerDay),
        cell: ({ getValue }) => {
          return (
            <TextTruncate>{formatNumber(getValue<string>() || 0)}</TextTruncate>
          );
        },
      },
      {
        accessorKey: 'updatedAt',
        header: t('table.columns.updatedAt'),
        minSize: 170,
        accessorFn: (row) => dayjs(row.updatedAt).valueOf(),
        sortingFn: 'auto',
        cell: ({ getValue }) => {
          return formatDisplayDate(getValue<string>(), i18n.language as Locale);
        },
      },
      {
        accessorKey: 'id',
        header: '',
        minSize: 40,
        cell: ({ getValue }) => {
          return (
            <Box>
              <ButtonIcon
                onClick={() => {
                  setModalState((draft) => {
                    draft.currentId = getValue<string>();
                    draft.isOpenEditModal = true;
                  });
                }}
              >
                <EditIcon sx={{ color: (theme) => theme.palette.info.main }} />
              </ButtonIcon>

              <ButtonIcon>
                <DeleteIcon
                  sx={{ color: (theme) => theme.palette.error.main }}
                  onClick={() => {
                    setModalState((draft) => {
                      draft.currentId = getValue<string>();
                      draft.isOpenDeleteModal = true;
                    });
                  }}
                />
              </ButtonIcon>
            </Box>
          );
        },
      },
    ];
  }, [i18n.language, locationTypeOptions, setModalState, t]);

  return { columns };
}
