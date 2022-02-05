/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    
  const getMedian = nums => {
    if (!nums.length) return
    if (nums.length === 1) return nums[0]

    if (nums.length % 2) {
      return nums[Math.floor(nums.length / 2)]
    }
    else {
      return (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2
    }
  }

  const sortedIndex = (array, value) => {
    let low = 0, high = array.length;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
  }

  let medians = []
  let index = 0
  let window = nums.slice(0, k).sort((a,b) => a - b)
  
  do {
    medians.push(getMedian(window))
    let left = nums[index]
    window.splice(window.indexOf(left), 1)
    window.splice(sortedIndex(window, nums[index + k]), 0, nums[index + k])
    index++
  } while( index + k <= nums.length)

  return medians

};