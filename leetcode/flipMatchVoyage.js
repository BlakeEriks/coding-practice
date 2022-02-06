/**
 * Definition for a binary tree node.
 */ function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
 var flipMatchVoyage = function(root, voyage) {
  const result = []
  let index = 0

  const findFlips = root => {
    if (!root) return true
    if (root.val !== voyage[index++]) return false
    if (root.left !== null && root.left.val !== voyage[index]) {
      result.push(root.val)
      return findFlips(root.right) && findFlips(root.left)
    }
    return findFlips(root.left) && findFlips(root.right)
  }

  return findFlips(root) ? result : [-1]
};

let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// let root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))

console.log(flipMatchVoyage(root, [1,2,3]))
