/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numIslands = 0

  const islandToWater = (row,col) => {
    grid[row][col] = 0
    for ([adjRow, adjCol] of [[row-1, col], [row+1,col], [row, col+1], [row, col-1]]) {
      if (adjRow >= 0 && adjRow < grid.length && adjCol >= 0 && adjCol < grid[0].length && grid[adjRow][adjCol] === "1") {
        islandToWater(adjRow,adjCol)
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        numIslands++
        islandToWater(row,col)
      }
    }
  }
  return numIslands
};

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))