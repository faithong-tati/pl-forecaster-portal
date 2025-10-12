import { match, P } from 'ts-pattern';

import type { NativeFilter } from './types';
import type { TFunction } from 'i18next';

export function getEmptyStateText(
  globalFilter: NativeFilter,
  columnFilter: NativeFilter,
  t: TFunction<'machine', undefined>,
) {
  return match<[NativeFilter, NativeFilter]>([globalFilter, columnFilter])
    .with([P.string, P.string], ([global, column]) =>
      t('table.noResultForGlobalAndColumn', { global, column }),
    )
    .with([P.string, P.nullish], ([global]) =>
      t('table.noResultFor', { global }),
    )
    .with([P.nullish, P.string], ([, column]) =>
      t('table.noResultForColumn', { column }),
    )
    .otherwise(() => t('table.notFound'));
}
