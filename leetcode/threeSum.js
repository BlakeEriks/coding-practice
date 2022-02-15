/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  let res = []
  if (nums.length < 3) return res

  /* Sort to find 0 sum faster */
  nums = nums.sort((a,b) => a - b)

  /* For each num */
  for (let i = 0; i < nums.length; i++) {

    /* Don't try nums we already searched */
    if ( (i > 0 && nums[i] === nums[i-1]) || nums[i] > 0) continue
    let left = i + 1, right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]

      /* Winner! */
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])

        /* Skip duplicates */
        do {
          left++
        } while (nums[left] === nums[left - 1] && left < right);
      }
      /* Advance left side (increase sum) */
      else if (sum < 0) {
        left++
      }
      /* Decrease right side (decrease sum) */
      else {
        right--
      }
    }

  }
  return res
};

console.log(threeSum([-1,0,1,2,-1,-4]))