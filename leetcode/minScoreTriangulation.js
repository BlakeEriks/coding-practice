/**
 * @param {number[]} values
 * @return {number}
 */
 var minScoreTriangulation = function(values) {
    
  let dp = new Map()

  const helper = (i, j) => {

    if (j - i <= 1) return 0
    const key = `${i},${j}`
    
    if (dp[key]) {
      return dp[key]
    }

    let leastCost = Number.MAX_SAFE_INTEGER
    for (let k = i + 1; k < j; k++) {
      let ans = helper(i,k) + helper(k,j) + (values[i] * values[j] * values[k])
      leastCost = Math.min(leastCost, ans)
    }

    dp[key] = leastCost
    return leastCost
  }

  return helper(0, values.length-1)
};