/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
  const odds = nums.filter(num => num % 2)
  const evens = nums.filter(num => !(num % 2))
  let res = []
  while (odds.length || evens.length) {
    res.push(odds.pop())
    res.push(evens.pop())
  }
  return res
};