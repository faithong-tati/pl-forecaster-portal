import { match } from 'ts-pattern';

import rem from '@/core/utils/rem';

import type { SummarizeMachine } from '@/modules/dashboard/hooks/use-best-selling-location-type/types';

export function swapItems(items: SummarizeMachine[]) {
  return items
    .sort((a, b) => b.totalExpectedSalesPerDay - a.totalExpectedSalesPerDay)
    .reduce(
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
    .with(1, () => rem(190))
    .with(2, () => rem(170))
    .with(3, () => rem(160))
    .otherwise(() => '');

  const bgColor = match(item.rank)
    .with(1, () => 'linear-gradient(135deg, #FCF8E3 0%, #F8EFC6 100%)')
    .with(2, () => 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)')
    .with(3, () => 'linear-gradient(135deg, #FAEFE3 0%, #F5DCC5 100%)')
    .otherwise(() => '');

  const stat = [
    {
      id: 'machine',
      label: 'bestSellingLocationType.units.machines',
      value: item.totalCount,
    },
    {
      id: 'sales',
      label: 'bestSellingLocationType.units.bahtPerDay',
      value: item.totalExpectedSalesPerDay,
    },
  ];

  return {
    iconPath,
    height,
    stat,
    bgColor,
  };
}
