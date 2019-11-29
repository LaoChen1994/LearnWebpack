export const add: (x: number, y: number) => number = (x, y) => x + y;
export const padNumber: (x: number | string) => string = x => {
  let _item = typeof x === 'number' ? x.toString() : x;
  return _item.padStart(2, '0');
};
