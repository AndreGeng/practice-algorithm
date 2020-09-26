export function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let curr = x
  let result = 0
  while(curr !== 0) {
    const item = curr % 10
    curr = Math.floor(curr / 10)
    result = result * 10 + item
  }
  return result === x
};


// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))
// console.log(isPalindrome(1122))
