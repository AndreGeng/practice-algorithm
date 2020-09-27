function isMatch0(s: string, p: string): boolean {
  let i = 0;
  let j = 0;
  while(i < s.length || j < p.length) {
    if (s[i] === p[j] || p[j+1] === "*" || (p[j] === "." && s[i])) {
      i++
      j++
      continue;
    } else if (p[j] === "*") {
      for (let k=0;k<=s.length-i+1;k++) {
        const result = isMatch0(s.slice(i-1), Array(k).fill(p[j-1]).join("") + p.slice(j+1))
        if (result) {
          return true
        }
      }
    }
    return false
  }
  return true
}

function isMatch1(s: string, p: string): boolean {
  if (s === "") {
    return p.length === 0 || (p.length >=2 && p[1] === "*" && isMatch(s, p.slice(2)))
  }
  const firstMatch = s[0] === p[0] || p[0] === "."
  if (p.length >= 2 && p[1] === "*") {
    return isMatch1(s, p.slice(2)) || (firstMatch && isMatch1(s.slice(1), p))
  } else {
    return firstMatch && isMatch1(s.slice(1), p.slice(1))
  }
}
// 这个递归更纯粹些，思路比较清晰
// 关键是要想到从pattern的角度来思考
export function isMatch(s: string, p: string): boolean {
  if (p.length === 0) {
    return s.length ===0
  }
  const firstMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".")
  if (p.length >= 2 && p[1] === "*") {
    return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p))
  } else {
    return firstMatch && isMatch(s.slice(1), p.slice(1))
  }
}




// console.log(isMatch("aa", "a"))
// console.log(isMatch("aa", "a*"))
// console.log(isMatch("ab", ".*"))
// console.log(isMatch("aab", "c*a*b"))
// console.log(isMatch("mississippi", "mis*is*p*."))
// console.log(isMatch("a", ".*.."))
// console.log(isMatch("aaa", "ab*ac*a"))
// console.log(isMatch("", ".*.*"))
