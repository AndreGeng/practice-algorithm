/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums: number[], target: number): number[] {
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

export default twoSum;
