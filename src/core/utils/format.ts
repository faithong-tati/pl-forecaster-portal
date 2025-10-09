import { Decimal } from 'decimal.js';

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
