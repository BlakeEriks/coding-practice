/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
   const helper = nums => {
     if (nums.length < 2) return
     let middle = Math.floor(nums.length/2)
     if (nums[middle-1] > nums[middle]) return nums[middle]
     if (nums[middle+1] < nums[middle]) return next
     let min = helper(nums.slice(0, middle))
     if (Number.isInteger(min)) return min
     min = helper(nums.slice(middle+1))
     if (Number.isInteger(min)) return min
   }
   let min = helper(nums)
   return Number.isInteger(min) ? min : nums[0]
};

console.log(findMin([9,0,2,7,8]))