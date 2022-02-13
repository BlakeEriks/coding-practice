/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let left = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    left.push(left[i-1]*nums[i])
  }
  let product = 1
  for (let i = nums.length - 1; i > 0; i--) {
    left[i] = left[i-1] * product
    product *= nums[i]
  }
  left[0] = product
  return left
};