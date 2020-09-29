function longestCommonPrefix0(strs: string[]): string {
  function longestCommonPrefixWithTwoStrs(s1: string, s2: string) {
    let i = 0
    let result = ""
    while(s1[i] && s2[i]) {
      if (s1[i] !== s2[i]) {
        break;
      }
      result += s1[i]
      i++
    }
    return result
  }
  if (!strs || strs.length <= 0) {
    return ""
  }
  return strs.reduce((acc, str) => {
    return longestCommonPrefixWithTwoStrs(acc, str)
  })
};
function longestCommonPrefix1(strs: string[]): string {
  if (!strs || strs.length <= 0) {
    return ""
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let result = ""
  for (let i=0;i<strs[0].length;i++) {
    for(let j=1;j<strs.length;j++) {
      if (!strs[j][i] || strs[j][i] !== strs[0][i]) {
        return result
      }
    }
    result += strs[0][i]
  }
  return result
}
export function longestCommonPrefix(strs: string[]): string {
  function isCommonPrefix(strs1: string[], str: string) {
    if (strs1.length <= 0) {
      return str.length === 0
    }
    for (let i=0;i<strs1.length;i++) {
      if (!strs1[i].startsWith(str)) {
        return false
      }
    }
    return true
  }
  if (strs.length <= 0) {
    return ""
  }
  let minLength = Number.MAX_SAFE_INTEGER
  for (let i=0;i<strs.length;i++) {
    if(strs[i].length < minLength) {
      minLength = strs[i].length
    }
  }
  if (minLength === 0) {
    return ""
  }
  if (minLength === 1) {
    return isCommonPrefix(strs, strs[0][0]) ? strs[0][0] : ""
  }
  let l = 0
  let r = minLength - 1
  while (l <= r) {
    let middle = Math.floor((l + r)/2)
    const result = isCommonPrefix(strs, strs[0].slice(0, middle + 1))
    if (result) {
      l = middle + 1
    } else {
      r = middle - 1
    }
  }
  return strs[0].slice(0, Math.floor((l + r) / 2) + 1)
}

// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix([""]))
// console.log(longestCommonPrefix([]))
// console.log(longestCommonPrefix(["aa","aa"]))
// console.log(longestCommonPrefix(["aa","a"]))
// console.log(longestCommonPrefix(["aa","bb"]))
