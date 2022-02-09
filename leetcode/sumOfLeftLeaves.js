/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = root => {
  
  let sum = 0
  
  const sumUtil = (node) => {
    if (!node) {
      return
    }
    if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val
    }
    sumUtil(node.left)
    sumUtil(node.right)
  }
  
  sumUtil(root)
  return sum
}