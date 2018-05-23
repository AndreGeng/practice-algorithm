import Stack from './index';
import { expect } from 'chai';
import 'mocha';

describe('stack.reverse', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('reverse should work as expected', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.reverse();
    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(3);
  });
});

