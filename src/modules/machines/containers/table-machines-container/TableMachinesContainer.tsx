import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import ClientDataTable from '@/core/components/client-data-table';
import ContentHeader from '@/core/components/content-header';
import ModalInfo from '@/core/components/model-info/ModalInfo';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import FormSearchMachines from '@/modules/machines/components/form-search-machines';
import FormUpsertMachines from '@/modules/machines/components/form-upsert-machine/FormUpsertMachines';
import useTableMachines from '@/modules/machines/hooks/use-table-machines';

import { CreateSchema, GetSchema } from './schema';

import type { CreateSchemaFormData, GetSchemaFormData } from './schema';

function TableMachinesContainer() {
  const { t } = useTranslation('machine');
  const {
    rows,
    columns,
    globalFilter,
    columnFilters,
    modalState,
    setModalState,
    setGlobalFilter,
    setColumnFilters,
    onSubmitCreate,
  } = useTableMachines();

  // form
  const methods = useForm<GetSchemaFormData>({
    resolver: zodResolver(GetSchema),
    mode: 'onChange',
    defaultValues: { search: '', locationType: '' },
  });

  const createMethods = useForm<CreateSchemaFormData>({
    resolver: zodResolver(CreateSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      locationType: '',
      expectedSalesPerDay: '',
      averageProfitMarginPercentage: '',
      rentCostPerDay: '',
      electricCostPerTempPerDay: '',
    },
  });

  const { handleSubmit: handleCreate } = createMethods;

  return (
    <Panel>
      <ContentHeader
        title="Machine Management"
        renderNode={
          <Button
            variant="contained"
            onClick={() =>
              setModalState((draft) => {
                draft.isOpenCreateModal = true;
              })
            }
          >
            Add Machine
          </Button>
        }
      />

      <FormProvider {...methods}>
        <form noValidate>
          <FormSearchMachines
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            setGlobalFilter={setGlobalFilter}
          />
        </form>

        <ClientDataTable
          rows={rows}
          columns={columns}
          globalFilter={globalFilter}
          columnFilters={columnFilters}
          setGlobalFilter={setGlobalFilter}
          setColumnFilters={setColumnFilters}
        />
      </FormProvider>

      <ModalInfo
        open={modalState.isOpenCreateModal}
        sx={{
          '& .MuiDialog-paper': {
            width: rem(600),
          },
        }}
        title={t('table.modals.upsert.addTitle')}
        fixHeight={false}
        onClickPrimaryButton={() => handleCreate(onSubmitCreate)()}
        onClickSecondaryButton={() =>
          setModalState((draft) => {
            draft.isOpenCreateModal = false;
          })
        }
      >
        <FormProvider {...createMethods}>
          <form noValidate>
            <FormUpsertMachines />
          </form>
        </FormProvider>
      </ModalInfo>
    </Panel>
  );
}

export default memo(TableMachinesContainer);
