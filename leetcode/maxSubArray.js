/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum = 0
  let res = -99999
  for (num of nums) {
      sum += num
      res = Math.max(res,sum)
      sum = sum > 0 ? sum : 0
  }
  return res 
};