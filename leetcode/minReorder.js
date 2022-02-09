/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  
  const FROM = 0, TO = 1
  let map = new Map()
  
  for (const [from, to] of connections) {
    if (map[from]) {
      map[from][TO].push(to)
    }
    else {
      map[from] = [[], [to]]
    }

    if (map[to]) {
      map[to][FROM].push(from)
    }
    else {
      map[to] = [[from], []]
    }
  }

  let checked = new Set()
  let checkQueue = [0]
  let reverseCount = 0

  while (checkQueue.length) {
    let cur = checkQueue.shift()
    checked.add(cur)

    for (from of map[cur][FROM]) {
      if (!checked.has(from)) {
        checkQueue.push(from)
      }
    }
    for (to of map[cur][TO]) {
      if (!checked.has(to)) {
        checkQueue.push(to)
        reverseCount++;
      }
    }
  }

  return reverseCount
};