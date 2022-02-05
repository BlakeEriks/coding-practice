/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  const charArray = word.split('')
  const index = charArray.indexOf(ch)
  if (index === -1) return word
  return [...charArray.slice(0, index+1).reverse(), ...charArray.slice(index+1)].join('')
};

console.log(reversePrefix("abcde", "d"))