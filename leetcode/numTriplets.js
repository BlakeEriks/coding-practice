/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var numTriplets = function(nums1, nums2) {
    
  const productDiscovery = nums => {
    const products = {}
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        products[nums[i] * nums[j]] = products[nums[i] * nums[j]] ? products[nums[i] * nums[j]] + 1 : 1
      }
    }
    return products
  }

  const products1 = productDiscovery(nums1)
  const products2 = productDiscovery(nums2)

  let count = 0
  for (num of nums1) {
    if (products2[num*num]) count += products2[num*num]
  }
  for (num of nums2) {
    if (products1[num*num]) count += products1[num*num]
  }

  return count
};

console.log(numTriplets([1,1],[1,1,1]))