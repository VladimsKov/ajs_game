import { calcTileType } from '../utils';

test.each([
  [0, 8, 'top-left'],
  [1, 8, 'top'],
  [7, 8, 'top-right'],
  [8, 8, 'left'],
  [16, 8, 'left'],
  [56, 8, 'bottom-left'],
  [58, 8, 'bottom'],
  [63, 8, 'bottom-right'],
  [15, 8, 'right'],
  [55, 8, 'right'],
  [9, 8, 'center'],
])('index %s of board size %s => type: %s', (index, boardSize, expected) => {
  const value = calcTileType(index, boardSize);
  expect(value).toBe(expected);
});
