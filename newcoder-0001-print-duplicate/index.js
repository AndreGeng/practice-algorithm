function printDuplicate(nums) {
  let i = 0
  while (i < nums.length) {
    const item = nums[i]
    if (item === i) {
      i++
      continue
    }
    if (nums[i] === nums[item]) {
      console.log(nums[item])
      i++
      continue
    }
    [nums[item], nums[i]] = [nums[i], nums[item]]
  } 
}

// printDuplicate([1,2,3,4,3])
// printDuplicate([2,2,3,4,3])
