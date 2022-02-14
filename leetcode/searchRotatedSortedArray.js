/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let l = 0, r = nums.length - 1

  while (l < r) {

    let mid = Math.floor((r+l)/2)
    if (nums[mid] === target) return mid
    if (nums[l] === target) return l
    if (nums[r] === target) return r

    /* Left side sorted and target inside bounds */
    if (nums[l] < nums[mid] && target > nums[l] && target < nums[mid]) {
      r = mid - 1
    }
    /* Right side sorted and target inside bounds */
    else if (nums[r] > nums[mid] && target > nums[mid] && target < nums[r]) {
      l = mid + 1
    }
  
    /* At this point target must be in unsorted side, check if left is unsorted */
    else if (nums[l] > nums[mid]) {
      r = mid - 1
    }

    /* In unsorted right side */
    else {
      l = mid + 1
    }
  }

  return -1 
}
