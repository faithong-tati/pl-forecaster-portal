import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import Decimal from 'decimal.js';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { match, P } from 'ts-pattern';

import TextTruncate from '@/core/components/text-truncate';
import { formatDisplayDate } from '@/core/lib/helpers/format';
import { ButtonIcon } from '@/core/styles/common';
import { LocationType } from '@/core/types/models/machine.model';
import { formatNumber } from '@/core/utils';
import rem from '@/core/utils/rem';

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
          const marginValue = new Decimal(getValue<string>()).toNumber();
          const marginConfig = match(marginValue)
            .with(
              P.when((m) => m >= 50),
              () => ({ color: 'success.main', fontWeight: 700 }),
            )
            .with(
              P.when((m) => m < 20),
              () => ({ color: 'error.main', fontWeight: 700 }),
            )
            .otherwise(() => ({ color: undefined, fontWeight: undefined }));

          return (
            <TextTruncate
              color={marginConfig.color}
              fontWeight={marginConfig.fontWeight}
            >
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
                    draft.isClone = true;
                    draft.currentId = getValue<string>();
                    draft.isOpenEditModal = true;
                  });
                }}
              >
                <Tooltip title={t('table.actions.clone')}>
                  <ContentCopyIcon
                    sx={{
                      width: rem(20),
                      height: rem(20),
                      color: (theme) => theme.palette.info.main,
                    }}
                  />
                </Tooltip>
              </ButtonIcon>

              <ButtonIcon
                onClick={() => {
                  setModalState((draft) => {
                    draft.currentId = getValue<string>();
                    draft.isOpenEditModal = true;
                  });
                }}
              >
                <Tooltip title={t('table.actions.edit')}>
                  <EditIcon
                    sx={{
                      width: rem(20),
                      height: rem(20),
                      color: (theme) => theme.palette.text.secondary,
                    }}
                  />
                </Tooltip>
              </ButtonIcon>

              <ButtonIcon
                onClick={() => {
                  setModalState((draft) => {
                    draft.currentId = getValue<string>();
                    draft.isOpenDeleteModal = true;
                  });
                }}
              >
                <Tooltip title={t('table.actions.delete')}>
                  <DeleteIcon
                    sx={{
                      width: rem(20),
                      height: rem(20),
                      color: (theme) => theme.palette.error.main,
                    }}
                  />
                </Tooltip>
              </ButtonIcon>
            </Box>
          );
        },
      },
    ];
  }, [i18n.language, locationTypeOptions, setModalState, t]);

  return { columns };
}
