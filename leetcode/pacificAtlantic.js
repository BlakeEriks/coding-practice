/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
  let dp = new Array(heights.length).fill(0).map(() => new Array(heights[0].length).fill(null));

  const getAdjacent = (row,col) => [[row-1, col], [row+1, col], [row,col+1], [row, col-1]].filter(point => point[0] >= 0 && point[0] < heights.length && point[1] >= 0 && point[1] < heights[0].length)

  const search = (row, col, checked) => {
    if (dp[row][col] !== null) return dp[row][col]
    let access = {aa: (row === 0 || col === 0), ap: (row === heights.length-1 || col === heights[0].length-1)}
    checked[`${row},${col}`] = true

    let adjPoints = getAdjacent(row,col).filter(point => heights[point[0]][point[1]] <= heights[row][col] && !checked[`${point[0]},${point[1]}`])
    for (let i = 0; i < adjPoints.length; i++) {
      let adjAccess = search(adjPoints[i][0], adjPoints[i][1], checked)
      access.aa = adjAccess.aa || access.aa
      access.ap = adjAccess.ap || access.ap
    }
    
    return access
  }

  let res = []
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      let checked = {}
      let access = search(i, j, checked)
      dp[i][j] = access
      if (access.aa && access.ap) {
        res.push([i,j])
      }
    }
  }

  return res
};