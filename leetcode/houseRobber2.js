/**
 * @param {number[]} nums
 * @return {number}
 */
var robRecursiveMemo = function(nums) {
  
  if (nums.length < 3) return Math.max(nums[0] || 0, nums[1] || 0)
  let memo = new Array(nums.length-2).fill(-1)

  const robHelper = (nums, index) => {
    if (index < 0) return 0
    if (memo[index] >= 0) return memo[index]

    let res = Math.max(robHelper(nums, index - 2) + nums[index], robHelper(nums, index - 1))
    memo[index] = res
    return res
  }

  let first = robHelper(nums, nums.length - 2)
  memo = new Array(nums.length-2).fill(-1)
  let second = robHelper(nums.slice(1), nums.length - 2)

  return Math.max(first, second)
};