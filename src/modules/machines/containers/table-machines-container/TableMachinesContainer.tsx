import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/core/components/button';
import ClientDataTable from '@/core/components/client-data-table';
import ContentHeader from '@/core/components/content-header';
import { Panel } from '@/core/styles/common';
import FormSearchMachines from '@/modules/machines/components/form-search-machines';
import useTableMachines from '@/modules/machines/hooks/use-table-machines';

import { GetSchema } from './schema';

import type { GetSchemaFormData } from './schema';

function TableMachinesContainer() {
  const {
    rows,
    columns,
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
    </Panel>
  );
}

export default memo(TableMachinesContainer);
