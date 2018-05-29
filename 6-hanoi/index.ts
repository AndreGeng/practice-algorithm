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
}

function hanoiMethod1(n: number,
  from: Stack,
  mid: Stack,
  to: Stack, fromLabel: string, toLabel: string): number {
  if (n === 1) {
    mid.push(from.pop());
    console.log(`Move ${n} from ${fromLabel} to mid`);
    to.push(mid.pop());
    console.log(`Move ${n} from mid to ${toLabel}`);
    return 2;
  } else {
    const stepOne = hanoiMethod1(n-1, from, mid, to, fromLabel, toLabel);
    mid.push(from.pop());
    console.log(`Move ${n} from ${fromLabel} to mid`);
    const stepTwo = hanoiMethod1(n-1, to, mid, from, toLabel, fromLabel);
    to.push(mid.pop());
    console.log(`Move ${n} from mid to ${toLabel}`);
    const stepThree = hanoiMethod1(n-1, from, mid, to, fromLabel, toLabel);
    return stepOne + stepTwo + stepThree + 2;
  }
}

export { Stack as default, hanoiMethod1 };

