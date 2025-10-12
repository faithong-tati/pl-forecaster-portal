import { Stack } from '@mui/material';
import { debounce } from 'lodash';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import FormGenerator from '@/core/components/form-generator';
import useOptions from '@/core/hooks/use-options';
import rem from '@/core/utils/rem';

import type { FormSearchMachinesProps } from './types';
import type { ChangeEvent } from 'react';

function FormSearchMachines({
  columnFilters,
  setGlobalFilter,
  setColumnFilters,
}: FormSearchMachinesProps) {
  const { t } = useTranslation('machine');
  const { locationTypeOptions } = useOptions();
  const debouncedSetGlobalFilter = useMemo(
    () =>
      debounce((value: string) => {
        setGlobalFilter(value);
      }, 500),
    [setGlobalFilter],
  );

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} gap={rem(16)}>
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
              debouncedSetGlobalFilter(e.target.value);
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

              setColumnFilters(updatedFilter);
            },
          },
        ]}
      />
    </Stack>
  );
}

export default memo(FormSearchMachines);
