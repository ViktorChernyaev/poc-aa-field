import { sizes } from 'appConfig';

const { width, height } = sizes;

export function generateField() {
  const rows = Array.from(Array(height).keys());
  const cols = Array.from(Array(width).keys());
  return rows.map(y => {
    return { i: y, cols: cols.map(x => {
      return { y, x, i: `${x}.${y}` };
    }) };
  });
}
