export function convert(s: string, numRows: number): string {
  function getLineNum(idx: number) {
    if (numRows <= 1) return 1 
    if (numRows === 2) return (idx % 2) + 1
    const base = numRows + numRows - 2
    const tmpIdx = idx % base
    return tmpIdx >= numRows ? (numRows - 1) - (tmpIdx % numRows) : tmpIdx + 1
  }
  const map = new Map()
  for (let i=0;i<s.length;i++) {
    const lineNum = getLineNum(i)
    map.set(lineNum, (map.get(lineNum) || "") + s[i])
  }
  let result = ""
  for (let i=1;i<=numRows;i++) {
    const v = map.get(i)
    if(v) {
      result += v
    }
  }
  return result
}

// console.log(convert("PAYPALISHIRING", 3))
// console.log(convert("", 1))
