export function threeSumClosest(nums: number[], target: number): number {
    nums.sort((num1, num2) => num1 - num2)
    let prevIValue
    let closestV = Number.MAX_SAFE_INTEGER
    let sum = 0
    for (let i=0;i<nums.length;i++) {
        if (nums[i] === prevIValue) continue; 
        let j = i+1
        let k = nums.length - 1
        let prevJValue
        let prevKValue
        while(j < k) {
            if (nums[j]===prevJValue) {
                j++;
                continue;
            }
            if (nums[k]===prevKValue) {
                k--;
                continue;
            }
            const v = nums[i] + nums[j] + nums[k]
            if (Math.abs(v-target) < closestV) {
                closestV = Math.abs(v-target)
                sum = v
            }
            if (v===target) {
                return sum   
            }
            if (v - target > 0) {
                prevKValue = nums[k]
                k--
            } else if (v - target < 0) {
                prevJValue = nums[j]
                j++
            }
        }
        prevIValue = nums[i]
    }
    return sum
};
