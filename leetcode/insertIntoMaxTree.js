/**
 * Definition for a binary tree node.
 */ function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    
  const inOrderTraversal = (root, nums) => {
    if (!root) return
    inOrderTraversal(root.left, nums)
    nums.push(root.val)
    inOrderTraversal(root.right, nums)
  }

  const construct = nums => {
    if (!nums.length) return null
    const max = Math.max(...nums)
    return new TreeNode(max, construct(nums.slice(0, nums.indexOf(max))), construct(nums.slice(nums.indexOf(max)+1)))
  }

  const flattened = []
  inOrderTraversal(root, flattened)
  flattened.push(val)

  return construct(flattened)
};