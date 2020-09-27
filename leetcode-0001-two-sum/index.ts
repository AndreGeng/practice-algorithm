/**
 * @see https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      const targetNum = target - num;
      const targetNumIndex = nums.indexOf(targetNum);
      if (targetNumIndex !== -1 && targetNumIndex !== i) {
          return [i, targetNumIndex];
      }
  }
  return [];
};

export const twoSumWithHashTable = (nums: number[], target: number) => {
  const map = new Map<number, number>()
  for (let i = 0;i< nums.length;i++) {
    const complement = target - nums[i]
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)!]
    }
    map.set(nums[i], i)
  }
  return []
}
