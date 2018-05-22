class Stack {
  stackData: Array<number>;
  stackMin: Array<number>;
  constructor() {
    this.stackData = [];
    this.stackMin = [];
  }
  pop() {
    if (this.stackData.length === 0) {
      throw new Error('You do not have any more numbers.');
    }
    const value = this.stackData.pop();
    if (value! <= this.stackMin[this.stackMin.length - 1]) {
      this.stackMin.pop();
    }
    return value;
  }
  push(newValue: number) {
    if (this.stackMin.length === 0) {
      this.stackMin.push(newValue);
    } else if (newValue <= this.stackMin[this.stackMin.length - 1]) {
      this.stackMin.push(newValue);
    }
    this.stackData.push(newValue);
  }
  getMin() {
    if (this.stackMin.length === 0) {
      throw new Error('There is no data yet.');
    }
    return this.stackMin[this.stackMin.length - 1];
  }
}

export default Stack;
