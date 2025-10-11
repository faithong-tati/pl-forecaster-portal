import { InputAdornment, Stack } from '@mui/material';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormGenerator from '@/core/components/form-generator';
import useOptions from '@/core/hooks/use-options';
import rem from '@/core/utils/rem';

import type { FormUpsertMachineProps } from './types';

function FormUpsertMachines({ reset }: FormUpsertMachineProps) {
  const { t } = useTranslation('machine');
  const { t: tCore } = useTranslation('core');
  const { clearErrors } = useFormContext();
  const { locationTypeOptions } = useOptions();

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack gap={rem(16)} mt={rem(8)}>
      <Stack direction="row" gap={rem(16)}>
        <FormGenerator
          items={[
            {
              name: 'name',
              required: true,
              component: 'input-text',
              type: 'text',
              label: t('table.modals.upsert.fields.name'),
              t,
              onChange: () => {
                clearErrors('name');
              },
            },
            {
              name: 'locationType',
              required: true,
              component: 'input-select',
              type: 'text',
              label: t('table.filters.locationType'),
              t,
              options: locationTypeOptions.filter((option) => option.value),
              onChange: () => {
                clearErrors('locationType');
              },
            },
          ]}
        />
      </Stack>

      <FormGenerator
        items={[
          {
            name: 'expectedSalesPerDay',
            required: true,
            component: 'input-text',
            type: 'number',
            label: t('table.modals.upsert.fields.expectedSalesPerDay'),
            t,
            onChange: () => {
              clearErrors('expectedSalesPerDay');
            },
            slotProps: {
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {tCore('units.baht')}
                  </InputAdornment>
                ),
              },
            },
          },
          {
            name: 'averageProfitMarginPercentage',
            required: true,
            component: 'input-text',
            type: 'number',
            label: t(
              'table.modals.upsert.fields.averageProfitMarginPercentage',
            ),
            t,
            onChange: () => {
              clearErrors('averageProfitMarginPercentage');
            },
            slotProps: {
              input: {
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              },
            },
          },
          {
            name: 'rentCostPerDay',
            required: true,
            component: 'input-text',
            type: 'number',
            label: t('table.modals.upsert.fields.rentCostPerDay'),
            t,
            onChange: () => {
              clearErrors('rentCostPerDay');
            },
            slotProps: {
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {tCore('units.baht')}
                  </InputAdornment>
                ),
              },
            },
          },
          {
            name: 'electricCostPerTempPerDay',
            required: true,
            component: 'input-text',
            type: 'number',
            label: t('table.modals.upsert.fields.electricCostPerTempPerDay'),
            t,
            onChange: () => {
              clearErrors('electricCostPerTempPerDay');
            },
            slotProps: {
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {tCore('units.bahtPerTempPerDay')}
                  </InputAdornment>
                ),
              },
            },
          },
        ]}
      />
    </Stack>
  );
}

export default memo(FormUpsertMachines);
