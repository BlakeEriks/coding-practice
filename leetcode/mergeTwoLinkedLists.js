/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsIterative = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  let head, cur
  if (list1.val < list2.val) {
    head = list1
    list1 = list1.next
  }
  else {
    head = list2
    list2 = list2.next
  }
  cur = head
  while (list1 || list2) {
    if (!list1) {
      cur.next = list2
      list2 = list2.next
    }
    else if (!list2) {
      cur.next = list1
      list1 = list1.next
    }
    else if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    }
    else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next  
  }
  return head
};

var mergeTwoLinkedListsRecursive = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val < list2.val) {
    list1.next = mergeTwoLinkedListsRecursive(list1.next, list2)
    return list1
  }
  else {
    list2.next = mergeTwoLinkedListsRecursive(list1, list2.next)
    return list2
  }
}