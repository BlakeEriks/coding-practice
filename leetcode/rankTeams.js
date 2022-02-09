/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  let scores = {}
  for (vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      let team = vote[i]
      if (!scores[team]) {
        scores[team] = new Array(vote.length).fill(0)
      }
      scores[team][i]++
    }
  }
  
  scores = [...Object.entries(scores)]

  const sorted = scores.sort( (a,b) => {
    for (let i = 0; i < a[1].length; i++) {
      if (a[1][i] > b[1][i]) return -1
      if (b[1][i] > a[1][i]) return 1
    }
    return a[0].localeCompare(b[0])
  })
  return sorted.map(team => team[0]).join('')
};