import { Decimal } from 'decimal.js';
import { match, P } from 'ts-pattern';

export function formatNumber(
  input: number | string,
  fraction: number = 0,
): string {
  try {
    return Decimal(input).toNumber().toLocaleString('en-Us', {
      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction,
    });
  } catch {
    return '-';
  }
}

export function formatMetricNumber(value: number): string {
  return match(value)
    .with(
      P.when((v) => v >= 1_000_000),
      (v) => formatNumber(v / 1_000_000) + ' M',
    )
    .with(
      P.when((v) => v >= 1_000),
      (v) => formatNumber(v / 1_000) + ' K',
    )
    .otherwise((v) => `${v}`);
}
