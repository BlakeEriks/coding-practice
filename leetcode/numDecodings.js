/**
 * @param {string} s
 * @return {number}
 */

var numDecodingsRecursiveMemo = function(s) {
  
  let memo = new Array(s.length).fill(-1)

  let helper = index => {
    if (index < 0) return 1
    if (memo[index] >= 0) return memo[index]
  
    let count = 0
  
    let oneDigit = parseInt(s[index])

    if (oneDigit > 0 && oneDigit < 10) {
      count += helper(index - 1)
    }

    let twoDigits = parseInt(s.slice(index-1, index + 1)) || 0
  
    if (twoDigits > 9 && twoDigits < 27) {
      count += helper(index - 2)
    }
  
    memo[index] = count
    return count
  }

  return helper(s.length - 1)
};

var numDecodingsIterative = function(s) {

  let n = s.length
  let dp = new Array(n + 1).fill(0)
  dp[n] = 1
  dp[n-1] = s[n-1] === '0' ? 0 : 1

  for (let i = n - 2; i >= 0; i--) {
    if (s[i] !== '0') {
      dp[i] = dp[i+1]
      if (parseInt(s.slice(i, i+2)) < 27 ) {
        dp[i] += dp[i+2]
      }
    }
  }

  return dp[0]
}