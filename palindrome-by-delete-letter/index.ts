export function isPalindromeAfterDelete(s: string, depth: number = 1): boolean {
  if (!s || s.length <=0) return true
  let i = 0;
  let j = s.length - 1;
  while(i<=j) {
    if(s[i] !== s[j]) {
      break;
    }
    i++;
    j--;
  }
  if(i>j) {
    return true
  }
  // 已经删除了最多depth个字符，仍未形成回文字符串
  if (depth === 0) {
    return false
  }
  return isPalindromeAfterDelete(s.slice(i, j), depth - 1) || isPalindromeAfterDelete(s.slice(i + 1, j + 1), depth - 1)
}
