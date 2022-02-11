/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function(nums) {

  const isPrime = num => {
    if (num === 1 || num === 0) return false 
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if (!(num % i)) {
        return false
      }
    }
    return true
  }

  const getPrimeFactors = num => {
    if (num === 1 || num === 2) return [num]
    const factors = []
    while (true) {
      for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          factors.push(i)
          num /= i
          break
        }
      }
      if (isPrime(num)) {
        factors.push(num)
        break
      }
    }
    return factors
  }

  const getAllSubsets = nums => nums.reduce(
    (subsets, value) => subsets.concat(
     subsets.map(set => [value,...set])
    ),
    [[]]
  );

  nums = [...new Set(nums)]
  nums = nums.filter(num => {
    const factors = getPrimeFactors(num)
    return factors.length === [...new Set(factors)].length
  })

  /* Get permutations without overlapping factors */

  return getAllSubsets(nums).filter(subset => {
    if (subset.length === 0) return false
    if (subset.length === 1 && subset[0] === 1) return false
    const primeFactors = subset.map(num => getPrimeFactors(num)).flat()
    if (primeFactors.length !== [...new Set(primeFactors)].length) return false
    return true
  })


};

console.log(numberOfGoodSubsets([6,8,1,8,6,5,6,11,17]))