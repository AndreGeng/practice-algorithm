export function myAtoi(str: string): number {
  function trimStart(s: string) {
    if(!s) return s
    for(let i=0;i<s.length;i++) {
      const item = s[i]
      if (item !== " ") {
        return s.slice(i)
      }
    }
    return ""
  }
  const MIN_INT = -Math.pow(2, 31)
  const MAX_INT = Math.pow(2, 31) - 1
  let result = 0
  str = trimStart(str)
  if (!str) return 0
  let isNegative = false
  if (str[0] === "-") {
    isNegative = true
    str = str.slice(1)
  } else if (str[0] === "+") {
    isNegative = false
    str = str.slice(1)
  }
  for (let i=0;i<str.length;i++) {
    const item = parseInt(str[i])
    if (isNaN(item)) {
      break;
    }
    if (isNegative && result >= (Math.abs(MIN_INT)- item) / 10) {
      return MIN_INT
    }
    if (!isNegative && result >= (MAX_INT - item) / 10) {
      return MAX_INT
    }
    result = result * 10 + item
  }
  return isNegative ? -result : result
};


// console.log(myAtoi("42"))
// console.log(myAtoi("   -42"))
// console.log(myAtoi("4193 with words"))
// console.log(myAtoi("words and 987"))
// console.log(myAtoi("-91283472332"))
// console.log(myAtoi("  -0012a42"))
// console.log(myAtoi("2147483648"))
// console.log(myAtoi("-2147483647"))
// console.log(myAtoi("-2147483649"))
