/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      if (target - nums[i] in map){
          return [map[target-nums[i]], i]
      }
      else {
          map[nums[i]] = i
      }
  }
  return []
};

console.log(twoSum([2,7,11,15], 9))