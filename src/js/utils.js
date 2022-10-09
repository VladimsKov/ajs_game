/**
* @todo
* @param index - индекс поля
* @param boardSize - размер квадратного поля (в длину или ширину)
* @returns строка - тип ячейки на поле:
*
* top-left
* top-right
* top
* bottom-left
* bottom-right
* bottom
* right
* left
* center
*
* @example
* ```js
* calcTileType(0, 8); // 'top-left'
* calcTileType(1, 8); // 'top'
* calcTileType(63, 8); // 'bottom-right'
* calcTileType(7, 7); // 'left'
* ```
* */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  let plase = 'center';
  switch (true) {
    case index === 0: plase = 'top-left';
      break;
    case index === boardSize - 1: plase = 'top-right';
      break;
    case index === boardSize ** 2 - 1: plase = 'bottom-right';
      break;
    case index === boardSize ** 2 - boardSize: plase = 'bottom-left';
      break;
    case index > 0 && index < boardSize: plase = 'top';
      break;
    case index > boardSize ** 2 - boardSize && index < boardSize ** 2 - 1: plase = 'bottom';
      break;
    case index > boardSize - 1 && index < boardSize ** 2 - boardSize && index % boardSize === 0: plase = 'left';
      break;
    case index > boardSize && index < boardSize ** 2 - boardSize && (index + 1) % boardSize === 0: plase = 'right';
      break;
    default: plase = 'center';
  }
  return plase;
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
