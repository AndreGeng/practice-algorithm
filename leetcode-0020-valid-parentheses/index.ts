function isValid(s: string): boolean {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  } as { [key: string]: string }
  const arr = s.split("")
  const stack = []
  for (let i=0;i<arr.length;i++) {
    const item = arr[i]
    if (!map[item]) {
      stack.push(item)
      continue;
    }
    if (stack.length <= 0) {
      return false
    }
    if (stack[stack.length - 1] !== item) {
      return false
    }
    stack.pop()
  }
  if (stack.length === 0) {
    return true
  }
  return false
};
