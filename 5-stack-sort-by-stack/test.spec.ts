
import Stack from './index';
import { expect } from 'chai';
import 'mocha';

describe('sort stack by stack', () => {
  let stack: Stack;
  function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  beforeEach(() => {
    stack = new Stack();
    for (let i = 0; i < 10; i += 1) {
      stack.push(getRandomInteger(0, 200));
    }
  });
  it('sortStackByStack should work as expected', () => {
    Stack.sortStackByStack(stack);
    let preEle = stack.pop();
    while(!stack.isEmpty()) {
      const ele = stack.pop();
      expect(preEle).at.least(ele);
      preEle = ele;
    }
  });
});

