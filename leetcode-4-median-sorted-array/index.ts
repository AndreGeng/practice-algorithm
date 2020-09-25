/**
 * @see https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46
 * 对于nums1, nums2要合并形成nums的话，复杂度会变为O(m+n)
 * 假设把nums1划分为nums1Left, nums1Right两部分. nums2 -> nums2Left, nums2Right
 * 变量解释:
 *   - v1: nums1Left最后一个元素
 *   - v1Next: nums1Right第一个元素
 *   - v2: nums2Left最后一个元素
 *   - v2Next: nums2Right第一个元素
 * 如果nums的左半边由nums1Left, nums2Left合并而成的话就一定会存在
 * 1. v1 > v2 && v1 < v2Next || v2 > v1 && v2 < v1Next
 *
 * 假如不满足以上条件，说明对num1，nums2的分组是不正确的
 * 假设nums1长度为3，nums2长度为4，那nums1分组可允许的长度为[0, 3]
 * 要使算法时间复杂度满足log(m+n), 我们可以用二分查找的方式去『搜索』nums1的最终分组长度，我们有了判断是否找到结果的判断依据, 
 * 下个问题是怎么确定二分查找，应该继续向左查找，还是向右查找
 * 1. v1 > v2 && v1 > v2Next, 取左
 * 2. v2 > v1 && v2 > v1Next, 取右
 */
function getMin(v1: number, v2: number) {
  if (typeof v1 === "undefined") {
    return v2
  }
  if (typeof v2 === "undefined") {
    return v1
  }
  return Math.min(v1, v2)
}
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
  // 确保nums1.length<=nums.length
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  const leftLen = Math.ceil((nums1.length + nums2.length) / 2)
  const isEven = ((nums1.length + nums2.length) % 2 === 0)
  let left = 0
  let right = nums1.length
  let i = Math.ceil((left + right) / 2)
  while (i >= 0 && i <= nums1.length) {
    // left全由nums2构成
    if (i - 1 < 0) {
      if (!isEven) {
        return nums2[leftLen - 1]
      }
      return (nums2[leftLen - 1] + getMin(nums2[leftLen], nums1[0])) / 2
    }
    // left全由nums1构成, 由于nums1.length <= nums2.length, 所以只可能nums1.length === nums2.length
    if (leftLen - i - 1 < 0) {
      return (nums1[leftLen - 1] + nums2[0]) / 2
    }
    const v1 = nums1[i - 1]
    const v1Next = nums1[i]
    const v2 = nums2[leftLen - i - 1]
    const v2Next = nums2[leftLen - i]
    if (v1 >= v2 && (v1 <= v2Next || typeof v2Next === "undefined")) {
      // 找到符合条件的i
      if (!isEven) {
        return v1
      }
      return (v1 + getMin(v1Next, v2Next)) / 2
    } else if (v2 >= v1 && (v2 <= v1Next || typeof v1Next === "undefined")) {
      // 找到符合条件的i
      if (!isEven) {
        return v2
      }
      return (v2 + getMin(v1Next, v2Next)) / 2
    }

    if (v1 >= v2) {
      right = i
      i = Math.floor((left + i) / 2)
    } else if (v2 >= v1) {
      left = i
      i = Math.ceil((i + right) / 2)
    }
  }
};

// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,2], [3,4]))
// console.log(findMedianSortedArrays([0,0], [0,0]))
// console.log(findMedianSortedArrays([], [1]))
// console.log(findMedianSortedArrays([], [2,3]))
// console.log(findMedianSortedArrays([3], [-2,-1]))
// console.log(findMedianSortedArrays([3], [1,2,4]))
// console.log(findMedianSortedArrays([1,2,6,7,8], [3,4,5,9,10]))
