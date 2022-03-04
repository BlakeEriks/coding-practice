/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length < 2) return true
  let dp = new Array(nums.length)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i]
    if (dp[i]) {
      while (!dp[curNum + i] && curNum > 0) {
        dp[curNum + i] = true
        curNum--
      }
    }
  }
  return dp[nums.length-1] || false
};