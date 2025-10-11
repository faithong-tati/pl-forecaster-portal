import { zodResolver } from '@hookform/resolvers/zod';
import AddIcon from '@mui/icons-material/Add';
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

import { GetSchema, UpsertSchema } from './schema';

import type { GetSchemaFormData, UpsertSchemaFormData } from './schema';

function TableMachinesContainer() {
  const { t } = useTranslation('machine');
  const {
    rows,
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
  } = useTableMachines();

  // form
  const methods = useForm<GetSchemaFormData>({
    resolver: zodResolver(GetSchema),
    mode: 'onChange',
    defaultValues: { search: '', locationType: '' },
  });

  const upsertMethods = useForm<UpsertSchemaFormData>({
    resolver: zodResolver(UpsertSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    values: upsertModalConfig.defaultValues,
  });

  const { handleSubmit } = upsertMethods;

  return (
    <Panel sx={{ width: panelWidth, overflow: 'auto' }}>
      <ContentHeader
        title={t('table.title')}
        renderNode={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              setModalState((draft) => {
                draft.isOpenCreateModal = true;
              })
            }
          >
            {t('table.buttons.add')}
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
        open={upsertModalConfig.open}
        sx={{
          '& .MuiDialog-paper': {
            width: rem(600),
          },
        }}
        title={upsertModalConfig.title}
        fixHeight={false}
        onClickPrimaryButton={handleSubmit(upsertModalConfig.onSubmit)}
        onClickSecondaryButton={onCloseModal}
      >
        <FormProvider {...upsertMethods}>
          <form noValidate>
            <FormUpsertMachines />
          </form>
        </FormProvider>
      </ModalInfo>

      <ModalInfo
        open={deleteModelConfig.open}
        title={deleteModelConfig.title}
        fixHeight={false}
        severity="warning"
        contents={deleteModelConfig.contents}
        onClickPrimaryButton={deleteModelConfig.onSubmit}
        onClickSecondaryButton={onCloseModal}
      />
    </Panel>
  );
}

export default memo(TableMachinesContainer);
