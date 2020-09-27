/**
 * 算法: 滑动窗口
 */
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s: string): number {
  let result = 0
  if (!s) {
    return result
  }
  let set = new Set()
  let i = 0;
  let j = 0;
  while (i <= j && j< s.length) {
    if (!set.has(s[j])) {
      result = Math.max(result, j - i + 1)
      set.add(s[j])
      j++
      continue;
    }
    set.delete(s[i])
    i++
  }
  return result
};
