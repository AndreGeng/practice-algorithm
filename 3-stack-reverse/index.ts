class Stack {
  _stack = new Array();
  push(item: any) {
    const {
      _stack: stack,
    } = this;
    stack.push(item);
  }
  pop() {
    const {
      _stack: stack,
    } = this;
    return stack.pop();
  }
  getAndRemoveLastEle(): any {
    const {
      _stack: stack,
    } = this;
    const ele = stack.pop();
    if (stack.length === 0) {
      return ele;
    } else {
      const result = this.getAndRemoveLastEle();
      stack.push(ele);
      return result;
    }
  }
  reverse() {
    const {
      _stack: stack,
    } = this;
    if (stack.length === 1) {
      return stack;
    } else {
      const lastEle = this.getAndRemoveLastEle();
      this.reverse();
      stack.push(lastEle);
      return stack;
    }
  }
}

export default Stack;
