class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return head
  }
  if (n <=0) {
    return head
  }
  let emptyHead = new ListNode(undefined, head)
  let fastP: ListNode | null = emptyHead
  let slowP: ListNode | null = emptyHead
  let i = 0
  while (fastP) {
    fastP = fastP.next
    if (i <= n) {
      i++
      continue;
    }
    if (slowP.next) {
      slowP = slowP.next
    }
  }
  if (slowP.next) {
    slowP.next = slowP.next.next
    return emptyHead.next
  }
  return null
};
