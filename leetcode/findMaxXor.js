/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  nums = [...new Set(nums)]
  if (nums.length === 1) return 0

  let biggestBit = 0
  for (num of nums) {
    while (num > 2**biggestBit) {
      biggestBit++
    }
  }
  biggestBit--

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    
    if(!(nums[i] >> biggestBit)) continue
    // if (!(nums[i] >> biggestBit)) continue
    for (let j = 0; j < nums.length; j++) {
      if ((nums[i] ^ nums[j]) > max) {
        max = nums[i] ^ nums[j]
      }
    }    
  }
  return max
};

console.log(findMaximumXOR([3,10,5,25,2,8]))