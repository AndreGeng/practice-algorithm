function fourSum(nums: number[], target: number): number[][] {
  function advance(oldV: number, m: number, forword: boolean = true) {
    do {
      forword ? m++ : m--
    } while (sortedNums[m] === oldV)
    return m
  }
  const result = []
  const sortedNums = nums.sort((n, n1) => n - n1)
  let i = 0
  while( i < sortedNums.length )  {
    const iV = sortedNums[i]
    let j = i + 1
    while (j < sortedNums.length) {
      const jV = sortedNums[j]
      let k = j + 1
      let l = sortedNums.length - 1
      while (k < l) {
        const kV = sortedNums[k]
        const lV = sortedNums[l]
        const tmp = iV + jV + kV + lV
        if (tmp > target) {
          l--
          continue;
        }
        if (tmp < target) {
          k++
          continue;
        }
        result.push([iV, jV, kV, lV])
        k = advance(kV, k)
        l = advance(lV, l, false)
      }

      j = advance(jV, j)
    }
    i = advance(iV, i)
  }
  return result;
};

// console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([0,0,0,0], 1))
