export function intToRoman(num: number): string {
  const mapArr = [{
    value: 1000,
    char: "M",
  }, {
    value: 900,
    char: "CM"
  }, {
    value: 500,
    char: "D",
  }, {
    value: 400,
    char: "CD"
  },{
    value: 100,
    char: "C"
  }, {
    value: 90,
    char: "XC"
  }, {
    value: 50,
    char: "L"
  }, {
    value: 40,
    char: "XL"
  },{
    value: 10,
    char: "X"
  }, {
    value: 9,
    char: "IX"
  }, {
    value: 5,
    char: "V"
  }, {
    value: 4,
    char: "IV"
  }, {
    value: 1,
    char: "I"
  }]
  let result = ""
  let curr = num
  for(let i=0;i<mapArr.length;i++) {
    const item = mapArr[i]
    const tmp = Math.floor(curr/item.value)
    if (tmp > 0) {
      result += Array(tmp).fill(item.char).join("")
    }
    curr = curr % item.value
  }
  return result
};

// console.log(intToRoman(3))
// console.log(intToRoman(4))
// console.log(intToRoman(9))
// console.log(intToRoman(58))
