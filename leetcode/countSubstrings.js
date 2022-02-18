/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

  let count = 0
  
  const helper = (left, right) => {
    while (left >= 0 && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    helper(i,i)
    helper(i, i+1)
  }
  
  return count
};

console.log(countSubstrings("aaa"))