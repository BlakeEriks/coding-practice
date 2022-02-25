/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let numSet = new Set()
  for (let num of nums) {
      numSet.add(num)
  }
  for (let i = 0; i <= nums.length; i++) {
      if (!numSet.has(i)) return i
  }
  return -1
};