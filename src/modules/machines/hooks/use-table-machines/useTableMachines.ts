import { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import useOptions from '@/core/hooks/use-options';
import { generateId } from '@/core/lib/helpers';
import SidebarContext from '@/modules/templates/contexts/auth-context';

import { useColumn } from './useColumn';
import { useSubmitEvent } from './useSubmitEvent';

import type { ColumnFiltersState } from '@tanstack/react-table';

export default function useTableMachines() {
  const { t } = useTranslation('machine');
  const { state } = useContext(SidebarContext);
  // state
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: 'locationType',
      value: '',
    },
  ]);

  // async hooks
  const {
    data,
    getMachine,
    modalState,
    setModalState,
    onSubmitCreate,
    onSubmitUpdate,
    onSubmitDelete,
    onCloseModal,
  } = useSubmitEvent();

  const { locationTypeOptions } = useOptions();
  const { columns } = useColumn({ locationTypeOptions, setModalState });
  // const
  const upsertModalConfig = useMemo(() => {
    const defaultName = getMachine?.name || '';

    return {
      open: modalState.isOpenCreateModal || modalState.isOpenEditModal,
      title:
        modalState.isOpenCreateModal || modalState.isClone
          ? t('table.modals.upsert.addTitle')
          : t('table.modals.upsert.editTitle'),
      onSubmit:
        modalState.isOpenCreateModal || modalState.isClone
          ? onSubmitCreate
          : onSubmitUpdate,
      defaultValues: {
        name: modalState.isClone
          ? `${defaultName}_copy_${generateId(4)}`
          : defaultName,
        locationType: getMachine?.locationType || '',
        expectedSalesPerDay: getMachine?.expectedSalesPerDay || '',
        averageProfitMarginPercentage:
          getMachine?.averageProfitMarginPercentage || '',
        rentCostPerDay: getMachine?.rentCostPerDay || '',
        electricCostPerTempPerDay: getMachine?.electricCostPerTempPerDay || '',
      },
    };
  }, [
    getMachine,
    modalState.isClone,
    modalState.isOpenCreateModal,
    modalState.isOpenEditModal,
    onSubmitCreate,
    onSubmitUpdate,
    t,
  ]);

  const deleteModelConfig = useMemo(() => {
    return {
      open: modalState.isOpenDeleteModal,
      title: t('table.modals.delete.title'),
      onSubmit: onSubmitDelete,
      contents: [
        {
          key: t('table.modals.delete.name'),
          value: getMachine?.name || '-',
          styleConfig: {
            gridKeySize: 4,
            gridValueSize: 8,
          },
        },
        {
          key: t('table.modals.delete.locationType'),
          value:
            locationTypeOptions.find(
              (option) => option.value === getMachine?.locationType,
            )?.label || '-',
          styleConfig: {
            gridKeySize: 4,
            gridValueSize: 8,
          },
        },
      ],
    };
  }, [
    getMachine?.locationType,
    getMachine?.name,
    locationTypeOptions,
    modalState.isOpenDeleteModal,
    onSubmitDelete,
    t,
  ]);

  const panelWidth = useMemo(() => {
    if (state.isOpenSideBar) return 'calc(100vw - 344px)';

    return 'calc(100vw - 144px)';
  }, [state.isOpenSideBar]);

  return {
    rows: data ?? [],
    columns,
    globalFilter,
    columnFilters,
    upsertModalConfig,
    deleteModelConfig,
    panelWidth,

    setModalState,
    setGlobalFilter,
    setColumnFilters,
    onCloseModal,
  };
}
