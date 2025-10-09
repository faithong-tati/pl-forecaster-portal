import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import ClientDataTable from '@/core/components/client-data-table';
import ContentHeader from '@/core/components/content-header';
import FormGenerator from '@/core/components/form-generator';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import useTableMachines from '@/modules/machines/hooks/use-table-machines';

import { GetSchema } from './schema';

import type { GetSchemaFormData } from './schema';
import type { ChangeEvent } from 'react';

function TableMachinesContainer() {
  const { t } = useTranslation('machine');
  const {
    rows,
    columns,
    locationTypeOptions,
    globalFilter,
    columnFilters,
    setGlobalFilter,
    setColumnFilters,
  } = useTableMachines();

  // form
  const methods = useForm<GetSchemaFormData>({
    resolver: zodResolver(GetSchema),
    mode: 'onChange',
    defaultValues: { search: '', locationType: '' },
  });

  return (
    <Panel>
      <ContentHeader
        title="Machine Management"
        renderNode={<Button variant="contained">Add Machine</Button>}
      />

      <FormProvider {...methods}>
        <form noValidate>
          <Stack direction="row" gap={rem(16)}>
            <FormGenerator
              items={[
                {
                  name: 'search',
                  component: 'input-text',
                  type: 'text',
                  label: t('table.filters.search'),
                  t,
                  onChange: (
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                  ) => {
                    setGlobalFilter(e.target.value);
                  },
                },
                {
                  name: 'locationType',
                  component: 'input-select',
                  type: 'text',
                  label: t('table.filters.locationType'),
                  t,
                  options: locationTypeOptions,
                  onChange: (value: string) => {
                    const newValue = { id: 'locationType', value };
                    const updatedFilter = columnFilters.map((item) =>
                      item.id === newValue.id ? newValue : item,
                    );

                    console.log(newValue);

                    setColumnFilters(updatedFilter);
                  },
                },
              ]}
            />
          </Stack>
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
    </Panel>
  );
}

export default memo(TableMachinesContainer);
