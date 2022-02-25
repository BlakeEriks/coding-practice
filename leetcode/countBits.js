var hammingWeight = function(n) {
  let ones = 0
  n = n.toString(2);
  for (let char of n) {
    if (char === "1") ones++
  }
  return ones
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let res = []  
  for (let i = 0; i < n.length; i++) {
    res.push(hammingWeight(i))
  }
  return res
};