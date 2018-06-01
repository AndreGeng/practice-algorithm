function getMaxWindowArr(arr: number[], w: number) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('first param should be an array');
  }
  if (w <= 0) {
    throw new Error('window size should bigger than 0');
  }
  let result = [];
  for (let i = 0; i < arr.length - w + 1; i+=1) {
    result.push(Math.max.apply(null, arr.slice(i, i + w)));
  }
  return result;
}

export default getMaxWindowArr;
