/**
 * @param {number} n
 * @return {boolean}
 */
 var winnerSquareGame = function(n) {
    
  let dp = new Map()

  const helper = n => {
    if (dp.has(n)) return dp.get(n)
    let sqRoot = Math.floor(Math.sqrt(n))
    for (let i = 1; i <= sqRoot; i++) {
      if (!helper(n-i*i)) {
        dp.set(n, true)
        return true
      }
    }
    dp.set(n, false)
    return false
  }
  
  return helper(n)
};