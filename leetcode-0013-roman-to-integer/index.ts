export function romanToInt(s: string): number {
  const romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV", "I"]
  const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let i = 0;
  let curr = s
  let result = 0
  while(curr && i < romanArr.length) {
    if (curr.startsWith(romanArr[i])) {
      result += intArr[i]
      curr = curr.slice(romanArr[i].length)
    } else {
      i++
    }
  }
  return result
};

// console.log(romanToInt("III"))
// console.log(romanToInt("IV"))
// console.log(romanToInt("IX"))
// console.log(romanToInt("LVIII"))
// console.log(romanToInt("MCMXCIV"))
