import TwoStackQueue from './index';
import { expect } from 'chai';
import 'mocha';

describe('two stack queue', () => {
  let queue: TwoStackQueue;
  beforeEach(() => {
    queue = new TwoStackQueue();
  });
  it('should have method poll/add/peek', () => {
    expect(queue).to.have.property('poll');
    expect(queue).to.have.property('add');
    expect(queue).to.have.property('peek');
  });
  it('peek should return value in insert sequence', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).to.equal(1);
    expect(queue.peek()).to.equal(1);
  });
  it('poll should return value in insert sequence', () => {
    queue.add(1);
    queue.add(2);
    expect(queue.poll()).to.equal(1);
    expect(queue.poll()).to.equal(2);
  });
});

