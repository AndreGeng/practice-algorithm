function paddingWithZero(str: string, targetLen: number, left: boolean) {
  const strArr = str.split("")
  while (strArr.length < targetLen) {
    if (left) {
      strArr.unshift("0")
    } else {
      strArr.push("0")
    }
  }
  return strArr.join("")
}
function integerAdd(str1: string, str2: string) {
  let highV = 0
  const maxLen = Math.max(str1.length, str2.length)
  const result = []
  for (let i = 0; i < maxLen; i++) {
    let v1 = typeof str1[str1.length - 1 - i] === "undefined" ? 0 : Number(str1[str1.length - 1 - i])
    let v2 = typeof str2[str2.length - 1 - i] === "undefined" ? 0 : Number(str2[str2.length - 1 - i])
    const tmp = v1 + v2 + highV
    const r = tmp%10
    highV = Math.floor(tmp/10)
    result.unshift(r)
  }
  if (highV > 0) {
    result.unshift(highV)
  }
  return result.join("")
}
function bigNumAdd(str1: string, str2: string) {
  let [i1, d1] = str1.split(".")
  let [i2, d2] = str2.split(".")
  if (typeof d1 === "undefined") {
    d1 = "0"
  }
  if (typeof d2 === "undefined") {
    d2 = "0"
  }
  const iTargetLen = Math.max(i1.length, i2.length)
  const dTargetLen = Math.max(d1.length, d2.length)
  i1 = paddingWithZero(i1, iTargetLen, true)
  i2 = paddingWithZero(i2, iTargetLen, true)
  d1 = paddingWithZero(d1, dTargetLen, false)
  d2 = paddingWithZero(d2, dTargetLen, false)
  let result = (integerAdd(i1 + d1, i2 + d2)).split("")
  // 添加小数点
  result.splice(-d1.length, 0, ".")
  return result.join("")
}

console.log(bigNumAdd("9007199254740991.34", "12345.876"))
