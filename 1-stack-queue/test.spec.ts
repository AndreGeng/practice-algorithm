import Stack from './index';
import { expect } from 'chai';
import 'mocha';

describe('stack', () => {
  let stack: Stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('should have method push/pop/getMin', () => {
    expect(stack).to.have.property('push');
    expect(stack).to.have.property('pop');
    expect(stack).to.have.property('getMin');
  });
  it('#getMin should return value correctly', () => {
    Array.from(Array(100))
      .forEach(() => {
        stack = new Stack();
        const array = Array.from(Array(10)).map(() => {
          return Math.floor(Math.random() * 10);
        });
        array.forEach((item) => {
          stack.push(item);
        });
        expect(stack.getMin()).to.equal(Math.min.apply(null, array));
        for (let i = 1, len = array.length; i < len; i += 1) {
          stack.pop();
          array.pop();
          expect(stack.getMin()).to.equal(Math.min.apply(null, array));
        }
      });
  });
});

