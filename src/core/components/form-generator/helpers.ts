export function clamp(input: number, min = 0, max = 1_000_000_000_000) {
  return Math.min(max, Math.max(min, input));
}
