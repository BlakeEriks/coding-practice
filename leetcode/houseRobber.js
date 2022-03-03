/**
 * @param {number[]} nums
 * @return {number}
 */
var robRecursiveMemo = function(nums) {
  
  let memo = new Array(nums.length).fill(-1)

  const robRecursive = index => {
    if (index < 0) return 0
    if (memo[index] >= 0) return memo[index]
    let res = Math.max(robRecursive(index - 2) + nums[index], robRecursive(index - 1))
    memo[index] = res
    return res
  }

  return robRecursive(nums.length - 1)
};

var robIterativeDP = function(nums) {
  
  let dp = new Array(nums.length).fill(-1)
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i])
  }

  return dp[nums.length]
};