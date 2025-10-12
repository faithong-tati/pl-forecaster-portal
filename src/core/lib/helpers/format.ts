import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import { match } from 'ts-pattern';

import { DateFormat } from '@/core/lib/constants';

import type { Locale } from '@/core/types';
import type { Dayjs } from 'dayjs';

dayjs.extend(buddhistEra);

export function formatDisplayDate(
  date: Dayjs | string | null,
  locale: Locale,
  dateFormat: string = DateFormat.DEFAULT_SYSTEM,
  defaultValue?: string,
): string {
  const localizeDateFormat =
    locale === 'en' ? dateFormat : dateFormat.replace('YYYY', 'BBBB');

  return match(dayjs(date).isValid())
    .with(true, () => dayjs(date).format(localizeDateFormat))
    .with(false, () => defaultValue ?? '-')
    .exhaustive();
}
