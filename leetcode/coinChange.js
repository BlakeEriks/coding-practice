/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        let min = dp[i] >= 0 ? dp[i] : Infinity
        dp[i] = Math.min(min , dp[i - coin] + 1)
      }
    }
  }
  
  return isNaN(dp[amount]) ? -1 : dp[amount]
};