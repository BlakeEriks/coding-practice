/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let runner = head
  while (runner) {
      if (runner.next) {
          runner = runner.next.next 
      }
      else {
          return false
      }
      head = head.next
      if (runner === head) return true
  }
  return false
};