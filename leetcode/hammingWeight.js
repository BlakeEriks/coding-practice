/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ones = 0
  n = n.toString(2);
  for (let char of n) {
    if (char === "1") ones++
  }
  return ones
};