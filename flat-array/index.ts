export const flattenArr = (arr: any): number[] => {
  if (!Array.isArray(arr)) {
    return [arr]
  }
  return arr.reduce((acc, item) => {
    return [...acc, ...flattenArr(item)]
  }, [])
}
// console.log(flattenArr([1,2,3,[4,5,[6,7]]]))
