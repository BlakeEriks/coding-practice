function topThreeWords(text) {
  map = {}
  for (word of text.split(/\s+/)) {
    let goodWord = ''
    for (char of word) {
      if ((char.toLowerCase() != char.toUpperCase()) || char === '\'') {
        goodWord += char.toLowerCase()
      }
    }
    if (goodWord.length === 0 || (char.toLowerCase() === char.toUpperCase())) continue
    if (map[goodWord]) {
      map[goodWord] += 1
    } else {
      map[goodWord] = 1
    }
  }

  return Object.entries(map).sort( (a,b) => b[1] - a[1]).splice(0,3).map(entry => entry[0])
}