export function threeSum(nums: number[]): number[][] {
    nums.sort((num1, num2) => num1 - num2)
    const result: number[][] = []
    let prevIValue
    for (let i=0;i<nums.length;i++) {
        if (nums[i] === prevIValue) continue; 
        let j = i+1
        let k = nums.length - 1
        let prevJValue
        while(j < k) {
            if (nums[j]===prevJValue) {
                j++;
                continue;
            }
            const target = nums[i] + nums[j] + nums[k]
            if (target > 0) {
                k--
                continue;
            }
            if (target < 0) {
                j++
                continue;
            }
            result.push([nums[i], nums[j], nums[k]])
            prevJValue = nums[j]
            j++
        }
        prevIValue = nums[i]
    }
    return result
};
