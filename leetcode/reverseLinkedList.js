/**
 * Definition for singly-linked list.
 */ 
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListRecursive = function(node) {
  if (!node.next) return node
  let head = reverseList(node.next)
  node.next.next = node
  node.next = null
  return head
};

var reverseListIterative = function(node) {
  let prev = null, next = node.next
  while (node) {
    node.next = prev
    prev = node
    node = next
    if (node) next = node.next
  }
  return prev
}