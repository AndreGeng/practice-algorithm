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
  to: Stack) {
  const totalMoves = hanoiMethod1Move(n, from, mid, to, 'left', 'right');
  console.log(`It will move ${totalMoves} steps`);
}
function hanoiMethod1Move(n: number,
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
    const stepOne = hanoiMethod1Move(n-1, from, mid, to, fromLabel, toLabel);
    mid.push(from.pop());
    console.log(`Move ${n} from ${fromLabel} to mid`);
    const stepTwo = hanoiMethod1Move(n-1, to, mid, from, toLabel, fromLabel);
    to.push(mid.pop());
    console.log(`Move ${n} from mid to ${toLabel}`);
    const stepThree = hanoiMethod1Move(n-1, from, mid, to, fromLabel, toLabel);
    return stepOne + stepTwo + stepThree + 2;
  }
}

interface Steps {
  [key:string]: [number, Stack, Stack, string, string],
  readonly lTM: [number, Stack, Stack, string, string],
  readonly mTL: [number, Stack, Stack, string, string],
  readonly mTR: [number, Stack, Stack, string, string],
  readonly rTM: [number, Stack, Stack, string, string],
}

function hanoiMethod2(n: number,
  left: Stack,
  mid: Stack,
  right: Stack) {
  const totalSize = left.size();
  const steps: Steps = Object.freeze({
    lTM: ([1, left, mid, 'left', 'mid'] as [number, Stack, Stack, string, string]),
    mTL: ([-1, mid, left, 'mid', 'left'] as [number, Stack, Stack, string, string]),
    mTR: ([2, mid, right, 'mid', 'right'] as [number, Stack, Stack, string, string]),
    rTM: ([-2, right, mid, 'right', 'mid'] as [number, Stack, Stack, string, string]),
  });
  let preStep;
  let totalMoves = 0;
  while(right.size() != totalSize) {
    preStep = hanoiMethod2Move(preStep, steps, left, mid, right);
    totalMoves += 1;
  }
  console.log(`It will move ${totalMoves} steps`);
}

function hanoiMethod2Move(
  preStep: (number|undefined),
  steps: Steps,
  left: Stack,
  mid: Stack,
  right: Stack) {
  if (!preStep) {
    console.log(`Move ${left.peek()} from left to mid`);
    mid.push(left.pop());
    return (steps.lTM)[0];
  }
  const keys = Object.keys(steps);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const [
      step,
      fromStack,
      toStack,
      fromStr,
      toStr,
    ] = steps[key];
    if (preStep + step !== 0 && // 不能做与上次相反的移动 -- 这样上一步会变的无意义
      preStep !== step && // 不能做与上次相同的移动 -- 这样会造成大压小
      (fromStack.size() > 0 &&
        toStack.size() > 0 &&
        fromStack.peek() < toStack.peek() ||
        fromStack.size() > 0 &&
        toStack.size() <= 0)) {
      console.log(`Move ${fromStack.peek()} from ${fromStr} to ${toStr}`);
      toStack.push(fromStack.pop());
      return step;
    }
  }
}

export { Stack as default, hanoiMethod1, hanoiMethod2 };
