import { Stack } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormGenerator from '@/core/components/form-generator';
import rem from '@/core/utils/rem';
import useOptions from '@/modules/machines/hooks/use-options';

function FormUpsertMachines() {
  const { t } = useTranslation('machine');
  const { clearErrors } = useFormContext();
  const { locationTypeOptions } = useOptions();

  return (
    <Stack gap={rem(16)} mt={rem(8)}>
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
          },
        ]}
      />
    </Stack>
  );
}

export default memo(FormUpsertMachines);
