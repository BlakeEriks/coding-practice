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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return []
  let res = []
  let queue = [{node: root, level: 0}]
  while (queue.length) {
      let {node, level} = queue.pop()
      if (res.length === level) res.push([])
      res[level].push(node.val)
      if (node.left) {
          queue.unshift({node: node.left, level: level + 1})    
      }
      if (node.right) {
          queue.unshift({node: node.right, level: level + 1})
      }
  }
  return res
};