/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let vals = new Set()
  for (num of nums) {
      if (vals.has(num)) return true
      vals.add(num)
  }
  return false
};