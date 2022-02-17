/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  s = s.split('')
  let length = 0
  for (let i = 0; i + length < s.length; i++) {
    while (i + length < s.length) {
      let subArr = s.slice(i, i+length+1)
      let distinct = new Set(subArr)
      if (subArr.length === distinct.size) {
        length++
      }
      else {
        break
      }
    }
  }
  return length
};