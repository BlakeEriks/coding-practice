/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  let count = 32
  let res = 0
  while (count--) {
    res *= 2
    res += n & 1
    n >>= 1
  }
  return res
};