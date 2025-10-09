import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LocationType } from '@/core/types/models/machine.model';

import type { OptionT } from '@/core/types';

export default function useOptions() {
  const { t } = useTranslation('machine');
  const locationTypeOptions = useMemo<OptionT[]>(() => {
    return [
      { label: t('options.locationType.all'), value: '' },
      {
        label: t('options.locationType.hospital'),
        value: LocationType.HOSPITAL,
      },
      { label: t('options.locationType.school'), value: LocationType.SCHOOL },
      {
        label: t('options.locationType.shoppingMall'),
        value: LocationType.SHOPPING_MALL,
      },
    ];
  }, [t]);

  return {
    locationTypeOptions,
  };
}
