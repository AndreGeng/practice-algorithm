// 广度优先
// function generateBrackets(num: number) {
//   let queue = [{ left: 0, right: 0, value: "" }]
//   for (let i=0;i<2*num;i++) {
//     const tmp = []
//     for (let j=0;j<queue.length;j++) {
//       const { left, right, value } = queue[j]
//       if (left < num) {
//         tmp.push({ left: left + 1, right, value: value + "(" })
//       }
//       if (right < num && right < left) {
//         tmp.push({ left, right: right + 1, value: value + ")" })
//       }
//     }
//     queue = tmp;
//   }
//   return queue.map(item => item.value)
// }

// 深度优先
function generateBrackets(num: number) {
  const result: string[] = []
  function generate(left: number, right: number, value: string) {
    if (left === num && right === num) {
      result.push(value)
      return
    }
    if (left < num) {
      generate(left+1, right, value + "(")
    }
    if (right < num && right < left) {
      generate(left, right+1, value + ")")
    }
  }
  generate(0, 0, "")
  return result
}

// console.log(generateBrackets(3))
