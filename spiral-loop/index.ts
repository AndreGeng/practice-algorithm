const loop = (arr: number[][]) => {
  const seq = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const xLen = arr[0].length;
  const yLen = arr.length;
  let x = 0;
  let y = 0;
  let seqPointer = 0;
  for (let i = 0; i < xLen * yLen; i += 1) {
    const spiralCount = Math.floor(seqPointer / seq.length);
    let [xDelta, yDelta] = seq[seqPointer % seq.length];
    if (i === 0) {
    } else if (x + xDelta >= spiralCount &&
      x + xDelta < xLen - spiralCount &&
      y + yDelta >= spiralCount &&
      y + yDelta < yLen - spiralCount &&
      !(seqPointer % seq.length === seq.length - 1 && 
        x + xDelta === y + yDelta)) {
      x = x + xDelta;
      y = y + yDelta;
    } else { // 转弯
      seqPointer += 1;
      [xDelta, yDelta] = seq[seqPointer % seq.length];
      x = x + xDelta;
      y = y + yDelta;
    }
    console.log(arr[x][y]);
  }
}

export default loop;
