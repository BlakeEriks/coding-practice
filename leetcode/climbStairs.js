/**
 * @param {number} n
 * @return {number}
 */
const dp = {1 : 1, 2 : 2}

var climbStairs = function(n) {
  if (dp[n]) return dp[n]
  let count = climbStairs(n-1) + climbStairs(n-2)
  dp[n] = count
  return count
};