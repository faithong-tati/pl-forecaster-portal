import { match } from 'ts-pattern';

import { formatNumber } from '@/core/utils';
import rem from '@/core/utils/rem';

import type { SummarizeMachine } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

export function swapItems(items: SummarizeMachine[]) {
  return items.reduce(
    (acc, curr) => {
      if (curr.rank === 2) {
        acc.unshift(curr);

        return acc;
      }

      acc.push(curr);

      return acc;
    },
    [] as typeof items,
  );
}

export function rankingConfig(item: SummarizeMachine) {
  const iconPath = match(item.rank)
    .with(1, () => '/gold-medal.png')
    .with(2, () => '/silver-medal.png')
    .with(3, () => '/bronze-medal.png')
    .otherwise(() => '');

  const height = match(item.rank)
    .with(1, () => rem(220))
    .with(2, () => rem(200))
    .with(3, () => rem(180))
    .otherwise(() => '');

  const bgColor = match(item.rank)
    .with(1, () => 'linear-gradient(135deg, #F6E8B1 0%, #F2D16B 100%)')
    .with(2, () => 'linear-gradient(135deg, #F5F5F5 0%, #E1E1E1 100%);')
    .with(3, () => 'linear-gradient(135deg, #F1D1A1 0%, #E6B17C 100%)')
    .otherwise(() => '');

  const stat = [
    {
      alignItems: 'start',
      label: 'Total Machines',
      value: formatNumber(item.totalCount),
    },
    {
      alignItems: 'end',
      label: 'Total Sales',
      value: formatNumber(item.totalExpectedSalesPerDay),
    },
  ];

  return {
    iconPath,
    height,
    stat,
    bgColor,
  };
}
