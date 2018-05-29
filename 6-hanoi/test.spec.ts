import Stack, { hanoiMethod1 } from './index';
import { expect } from 'chai';
import 'mocha';

describe('hanoi', () => {
  let left: Stack;
  let mid: Stack;
  let right: Stack;
  beforeEach(() => {
    left = new Stack();
    mid = new Stack();
    right = new Stack();
    for (let i = 0; i < 3; i += 1) {
      left.push(i);
    }
  });
  it('hanoi', () => {
    const steps = hanoiMethod1(3, left, mid, right, 'left', 'right');
    console.log(`It will move ${steps} steps`);
  });
});

