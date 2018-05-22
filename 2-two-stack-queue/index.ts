class TwoStackQueue {
  stackPush = new Array();
  stackPop = new Array();
  peek() {
    const {
      stackPush,
      stackPop,
    } = this;
    if (stackPop.length <= 0 && stackPush.length <= 0) {
      throw new Error('Queue is empty');
    } else if (stackPop.length <= 0) {
      while(stackPush.length > 0) {
        stackPop.push(stackPush.pop());
      }
    }
    return stackPop[stackPop.length - 1];
  }
  poll() {
    const {
      stackPush,
      stackPop,
    } = this;
    if (stackPop.length <= 0 && stackPush.length <= 0) {
      throw new Error('Queue is empty');
    } else if (stackPop.length <= 0) {
      while(stackPush.length > 0) {
        stackPop.push(stackPush.pop());
      }
    }
    return stackPop.pop();
  }
  add(item: any) {
    this.stackPush.push(item);
  }
}

export default TwoStackQueue;
