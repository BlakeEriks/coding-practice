/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsRecursiveMemo = function(m, n) {
    
  let memo = Array.from({length: m}, () => new Array(n).fill(-1))

  const recursive = (m2, n2) => {
    if (memo[m2][n2] >= 0) return memo[m2][n2]
    if (m2 === m-1 || n2 === n - 1) return 1
    
    memo[m2][n2] = recursive(m2 + 1, n2) + recursive(m2, n2 + 1) 
    return memo[m2][n2]
  }

  return recursive(0,0)
};

var uniquePathsIterativeDP = function(m, n) {
    
  if (m === 1 || n === 1) return 1

  let prev = new Array(n).fill(1)
  let cur = new Array(n).fill(0)
  
  for (let i = 1; i < m; i++) {
    cur = new Array(n).fill(0)
    cur[0] = 1
    for (let j = 1; j < n; j++) {
      cur[j] = cur[j-1] + prev[j]
    }
    prev = cur
  }

  return cur[n-1]
};

console.log(uniquePathsIterativeDP(1,2))