/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let minSoFar = prices[0]
  let maxProfit = 0
  for (price of prices) {
    if (price < minSoFar) minSoFar = price
    if (price - minSoFar > maxProfit) maxProfit = price - minSoFar
  }
  return maxProfit
};