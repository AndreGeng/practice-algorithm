import Stack, { hanoiMethod1, hanoiMethod2 } from './index';
import { expect } from 'chai';
import 'mocha';
import { spy } from 'sinon';

describe('hanoi', () => {
  let left: Stack;
  let mid: Stack;
  let right: Stack;
  function initData() {
    left = new Stack();
    mid = new Stack();
    right = new Stack();
    for (let i = 3; i > 0; i -= 1) {
      left.push(i);
    }
  }
  afterEach(() => {
    (console.log as any).restore();
  });
  it('hanoi method1 should work as expected', () => {
    const logSpy = spy(console, 'log');
    initData();
    hanoiMethod1(3, left, mid, right);
    const method1CallCount = logSpy.callCount;
    initData();
    hanoiMethod2(3, left, mid, right);
    const method2CallCount = logSpy.callCount - method1CallCount;
    expect(method1CallCount).to.equal(method2CallCount);
    for (let i = 0; i < method1CallCount; i+=1) {
      expect(logSpy.getCall(i).args[0]).to.equal(logSpy.getCall(i+method1CallCount).args[0]);
    }
  });
});

