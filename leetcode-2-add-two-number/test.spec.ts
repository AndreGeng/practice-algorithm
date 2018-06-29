import addTwoNum from './index';
import { expect } from 'chai';
import 'mocha';

interface ListNode {
  val: number;
  next: ListNode;
}
describe('leetcode add two sum', () => {
  let l1: ListNode;
  let l2: ListNode;
  class ListNode {
    public val: number;
    public next: ListNode|null;
    constructor(val: number) {
      this.val = val;
      this.next = null;
    }
  }
  it('addtwonum should work as expected when l1.length === l2.length', function() {
    l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l2 = new ListNode(9);
    l2.next = new ListNode(4);
    const result = addTwoNum(l1, l2);
    expect(result).not.to.be.null;
    if (result) {
      expect(result.val).to.equal(0);
      expect(result.next).not.to.be.null;
      if (result.next) {
        expect(result.next.val).to.equal(7);
      }
    }
  });
  it('addtwonum should work as expected when l1.length < l2.length', function() {
    l1 = new ListNode(1);
    l2 = new ListNode(9);
    l2.next = new ListNode(4);
    const result = addTwoNum(l1, l2);
    expect(result).not.to.be.null;
    if (result) {
      expect(result.val).to.equal(0);
      expect(result.next).not.to.be.null;
      if (result.next) {
        expect(result.next.val).to.equal(5);
      }
    }
  });
  it('addtwonum should work as expected when overflow', function() {
    l1 = new ListNode(1);
    l2 = new ListNode(9);
    const result = addTwoNum(l1, l2);
    expect(result).not.to.be.null;
    if (result) {
      expect(result.val).to.equal(0);
      expect(result.next).not.to.be.null;
      if (result.next) {
        expect(result.next.val).to.equal(1);
      }
    }
  });
});
