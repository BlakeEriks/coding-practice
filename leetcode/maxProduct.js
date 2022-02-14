/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let curMax = curMin = res = nums[0]
  for (num of nums.slice(1)) {
    [curMax, curMin] = [Math.max(curMax * num, curMin * num, num), 
                        Math.min(curMax * num, curMin * num, num)]
    res = Math.max(res, curMax)
  }
  return res
};