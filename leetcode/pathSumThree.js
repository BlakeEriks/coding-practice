/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 *  }
**/
 
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum, sums = []) {
  if (!root) return 0
  let paths = +(root.val === targetSum)
  for (let i = 0; i < sums.length; i++) {
    const newSum = sums[i] + root.val
    if (newSum === targetSum) paths++
    sums[i] = newSum
  }
  sums.push(root.val)
  return paths + pathSum(root.left, targetSum, [...sums]) + pathSum(root.right, targetSum, [...sums])
};