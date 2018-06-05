const availableMoves = [
  [1, 2],
  [2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, 1],
  [-1, 2],
  [-2, -1],
];

function print(arr: number[][]) {
  arr.forEach((item, index) => {
    let prefix = '';
    let suffix = '';
    if (index === 0) {
      prefix = '[';
    } else if (index === arr.length - 1) {
      suffix = ']';
    }
    console.log(`${prefix}${item.toString()}${suffix}`);
  });
}
let step = 1;
function move(x: number,
  y: number,
  arr: number[][]) {
  arr[x][y] = step;
  if (step === arr.length * arr[0].length) {
    print(arr);
    return 1;
  } else {
    for (let i = 0; i < availableMoves.length; i++) {
      const [deltaX, deltaY] = availableMoves[i];
      const newX = x + deltaX;
      const newY = y + deltaY;
      if (newX >= 0 &&
          newY >= 0 &&
          newX < arr.length &&
          newY < arr[0].length) {
        if (arr[newX][newY] < 0) {
          step += 1;
          if(move(newX, newY, arr)) {
            return 1;
          }
          step -= 1;
          arr[newX][newY] = -1;
        }
      }
    }
  }
}

export { move as default };
