/**
 * Definition for singly-linked list.
 */ function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !head.next) return null
  let runner = head, follower = head

  for (let i = 0; i < n; i++) {
    runner = runner.next
  }
  if (!runner) return follower.next
    
  while (runner) {
    runner = runner?.next
    if (runner) {
      follower = follower.next
    }
    else {
      follower.next = follower.next.next
    }
  }
  return head
};