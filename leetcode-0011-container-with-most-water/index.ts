function maxArea0(height: number[]): number {
  let result = 0
  for (let i = 0;i<height.length;i++) {
    for (let j = i+1;j<height.length;j++) {
      result = Math.max(result, (j - i) * Math.min(height[i], height[j]))
    }
  }
  return result
};
export function maxArea(height: number[]): number {
  let i =0;
  let j = height.length - 1
  let result = 0
  while(j > i) {
    result = Math.max(result, (j-i) * Math.min(height[j], height[i]))
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return result
};
