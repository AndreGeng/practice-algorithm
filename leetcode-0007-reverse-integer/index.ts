/**
 * 这个方法虽然也能通过谁，但有问题，它没有考虑到转化过程中数字溢出的情况
 */
function reverse0(x: number): number {
    const numSign = x > 0 ? "" : "-"
    const str = String(Math.abs(x))
    let resultStr = ""
  for (let i=str.length - 1;i>=0;i--) {
        const item = str[i]
        resultStr += item
    }
    const result = Number(numSign + Number(resultStr))
    if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
        return 0
    }
    return result
};
export function reverse(x: number): number {
  const isNegative = x < 0
  const abV = Math.abs(x)
  let curr = abV
  let result = 0
  const maxInt = Math.pow(2,31) - 1
  while (curr > 0) {
    if (result > (maxInt - (curr % 10)) / 10) {
      return 0
    }
    result = result * 10 + (curr % 10)
    curr = Math.floor(curr/10)
  }
  return isNegative ? -result : result
};

// console.log(reverse(123))
// console.log(reverse(-123))
// console.log(reverse(120))
