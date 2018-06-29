import twoSum from './index';
import { expect } from 'chai';
import 'mocha';

describe('leetcode two sum', () => {
  const nums: number[] = [];
  let target: number;
  let numOneIndex: number;
  let numTwoIndex: number;
  let arrSize = 10;
  /**
   * @param originalIndex 生成的index不能等于originalIndex
   */
  function getRandomIndex(originalIndex?: number) {
    while (true) {
      const index = Math.floor(Math.random() * 10);
      if (index !== originalIndex) {
        return index;
      }
    }
  }
  beforeEach(() => {
    for (let i = 0; i < arrSize; i += 1) {
      nums.push(Math.floor(Math.random() * 100));
    }
    numOneIndex = getRandomIndex();
    numTwoIndex = getRandomIndex(numOneIndex);
    target = nums[numOneIndex] + nums[numTwoIndex];
  });
  it('twosum should work as expected', function() {
    const [num1Index, num2Index] = twoSum(nums, target);
    expect(num1Index).not.equal(num2Index);
    [numOneIndex, numTwoIndex] = [numOneIndex, numTwoIndex].sort();
    expect(num1Index).to.equal(numOneIndex);
    expect(num2Index).to.equal(numTwoIndex);
  });
});
