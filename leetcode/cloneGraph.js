/**
 * // Definition for a Node.
 */ function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
  };
 

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

  let cloneMap = {}

  const helper = node => {
    if (!node) return
    if (cloneMap[node.val]) return cloneMap[node.val]

    let clone = new Node(node.val)
    cloneMap[node.val] = clone
    for (const node of node.neighbors) {
      clone.neighbors.push(helper(node))
    }
    return clone
  }

  return helper(node)
};

