import { Decimal } from 'decimal.js';
import { match, P } from 'ts-pattern';

export function formatNumber(
  input: number | string,
  fraction: number = 0,
): string {
  try {
    if (isNaN(Number(input))) return '-';

    return Decimal(input).toNumber().toLocaleString('en-Us', {
      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction,
    });
  } catch {
    return '-';
  }
}

export function formatMetricNumber(value: number): string {
  if (isNaN(value)) return '-';

  return match(value)
    .with(
      P.when((v) => v >= 1_000_000),
      (v) => formatNumber(v / 1_000_000, 1) + ' M',
    )
    .with(
      P.when((v) => v >= 1_000),
      (v) => formatNumber(v / 1_000, 1) + ' K',
    )
    .otherwise((v) => `${v}`);
}
