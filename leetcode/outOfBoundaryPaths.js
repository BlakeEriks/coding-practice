/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, M, i, j, memo = new Map()) {
  
  const inBounds = i >= 0 && j >= 0 && i < m && j < n
  const key = `${i}-${j}-${M}`
  if (memo.has(key)) return memo.get(key)
  if (!inBounds) return 1
  if (M === 0) return 0

  memo.set(key, 
    (findPaths(m,n, M-1, i+1, j, memo)
    + findPaths(m,n, M-1, i-1, j, memo)
    + findPaths(m,n, M-1, i, j+1, memo)
    + findPaths(m,n, M-1, i, j-1, memo)) % 1000000007
    )

  return memo.get(key)
};