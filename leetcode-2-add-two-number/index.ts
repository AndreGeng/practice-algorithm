/**
 * @see https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1: ListNode, l2: ListNode): ListNode | null {
  let l1Head: ListNode | null = l1;
  let l2Head: ListNode | null = l2;
  let resultHead = null;
  let resultTail = null;
  let highNum = 0;
  while (l1Head !== null && l2Head !== null) {
    const num: number = l1Head.val + l2Head.val + highNum;
    const lowNum = num % 10;
    highNum = Math.floor(num / 10);
    const node = new ListNode(lowNum);
    if (resultTail === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = node;
    }
    l1Head = l1Head.next;
    l2Head = l2Head.next;
    if (l1Head === null && l2Head !== null) {
      l1Head = new ListNode(0);
    }
    if (l1Head !== null && l2Head === null) {
      l2Head = new ListNode(0);
    }
  }
  if (highNum) {
    if (resultTail !== null) {
      resultTail.next = new ListNode(highNum);
      resultTail = resultTail.next;
    }
  }
  return resultHead;
};

export default addTwoNumbers;
