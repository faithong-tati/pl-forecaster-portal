export default function rem(unitInPixel: number, base = 16.0) {
  const pixelValue = Number(unitInPixel);

  if (pixelValue === 0) return '0';

  return `${pixelValue / base}rem`;
}
