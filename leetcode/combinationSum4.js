/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4TopDown = function(nums, target) {

  let dp = new Array(target+1).fill(-1)
  dp[0] = 1

  const recursive = target => {
    if (dp[target] !== -1) return dp[target]
    let res = 0
    for (const num of nums) {
      if (target - num >= 0) {
        res += recursive(target - num)
      }
    }
    dp[target] = res
    return res
  }

  return recursive(target)
};

var combinationSum4BottomUp = function(nums, target) {

  let comb = new Array(target+1).fill(0)
  comb[0] = 1

  for (let i = 1; i < comb.length; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        comb[i] += comb[i - num]
      }
    }
  }

  return comb[target]
};

console.log(combinationSum4BottomUp([1,2,3], 4))