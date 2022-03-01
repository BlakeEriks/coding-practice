/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceRecursive = function(text1, text2) {

  let m = text1.length, n = text2.length
  const memo = Array.from({ length: m }, () => new Array(n));
  
  const recursive = (m, n) => {

    if (m < 0 || n < 0) return 0
    if (memo[m][n]) return memo[m][n]

    let res = 0
    if (text1.charAt(m) === text2.charAt(n)) {
      res = 1 + recursive(m - 1, n - 1)
    }
    else {
      res = Math.max(recursive(m - 1, n), recursive(m, n-1))
    }
    memo[m][n] = res
    return res
  }
  return recursive(m-1, n-1)
};

var longestCommonSubsequenceDP = function(text1, text2) {

  let m = text1.length, n = text2.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i+1][j+1] = text1.charAt(i) === text2.charAt(j) ? dp[i][j] + 1 : Math.max(dp[i+1][j], dp[i][j+1])
    }
  }
  return dp[m][n]
};