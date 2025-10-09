import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import ClientDataGrid from '@/core/components/client-data-table';
import ContentHeader from '@/core/components/content-header';
import FormGenerator from '@/core/components/form-generator';
import { Panel } from '@/core/styles/common';
import useTableMachines from '@/modules/machines/hooks/use-table-machines';

import { GetSchema } from './schema';

import type { GetSchemaFormData } from './schema';

function TableMachinesContainer() {
  const { t } = useTranslation('machine');
  const { rows, columns, globalFilter, setGlobalFilter } = useTableMachines();
  // form
  const methods = useForm<GetSchemaFormData>({
    resolver: zodResolver(GetSchema),
    mode: 'onChange',
    defaultValues: { search: '' },
  });

  return (
    <Panel>
      <ContentHeader
        title="Machine Management"
        renderNode={<Button variant="contained">Add Machine</Button>}
      />

      <FormProvider {...methods}>
        <form noValidate>
          <FormGenerator
            items={[
              {
                name: 'search',
                component: 'input-text',
                type: 'text',
                label: t('table.filters.search'),
                t,
                onChange: (e) => {
                  setGlobalFilter(e.target.value);
                },
              },
            ]}
          />
        </form>

        <ClientDataGrid
          rows={rows}
          columns={columns}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </FormProvider>
    </Panel>
  );
}

export default memo(TableMachinesContainer);
