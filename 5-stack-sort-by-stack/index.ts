class Stack {
  _stack = new Array();
  push(num: number) {
    const { _stack } = this;
    _stack.push(num);
  }
  pop(): number {
    const { _stack } = this;
    if (_stack.length <= 0) {
      throw new Error('no more data');
    } else {
      return _stack.pop();
    }
  }
  peek(): number {
    const { _stack } = this;
    return _stack[_stack.length - 1];
  }
  isEmpty() {
    const { _stack } = this;
    return _stack.length <= 0;
  }
  size() {
    const { _stack } = this;
    return _stack.length;
  }
  static sortStackByStack(stack: Stack) {
    const help = new Stack();
    let stackProcessedCount = 0;
    let helpProcessedCount = 0;
    let totalSize = stack.size();
    const findLargestOrSmallestEle = (stackOne: Stack, stackTwo: Stack, countNeedProcess: number, isLargestNeed: boolean): number => {
      let temp = stackOne.pop();
      let count = countNeedProcess - 1;
      while(count > 0) {
      let condition = isLargestNeed  ? temp > stackOne.peek() : temp < stackOne.peek();
        if (condition) {
          stackTwo.push(stackOne.pop());
        } else {
          stackTwo.push(temp);
          temp = stackOne.pop();
        }
        count -= 1;
      }
      return temp;
    }

    while(stackProcessedCount + helpProcessedCount < totalSize) {
      let countNeedProcess: number = totalSize - stackProcessedCount - helpProcessedCount;
      if (stackProcessedCount <= helpProcessedCount) {
        const smallestEle: number = findLargestOrSmallestEle(stack, help, countNeedProcess, false);
        stack.push(smallestEle);
        stackProcessedCount += 1;
      } else {
        const largestEle: number = findLargestOrSmallestEle(help, stack, countNeedProcess, true);
        help.push(largestEle);
        helpProcessedCount += 1;
      }
    }
    while(!help.isEmpty()) {
      stack.push(help.pop());
    }
  }
}

export default Stack;
