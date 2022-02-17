/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxLen = 0
  for (let i = 0; i < s.length; i++) {
    let curLen = 1, curK = k, j = i, skip = i
    while (++j < s.length) {
      if (s[j] === s[i]) {
        curLen++
      }
      else if (curK > 0) {
        if (curK === k) skip = j
        curLen++
        curK--
      }
      else {
        break
      }
    }
    if (curK > 0) curLen = Math.min(s.length, curLen + curK)
    i = Math.max(skip - 1, i)
    maxLen = Math.max(curLen, maxLen)
  }
  return maxLen
};