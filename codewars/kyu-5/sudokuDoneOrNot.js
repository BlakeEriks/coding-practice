const checkRows = board => {
    let map = {}
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (map[board[row][col]]) return false;
            map[board[row][col]] = 1
        }
        map = {}
    }
    return true
}

const checkCols = board => {
    let map = {}
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board[0].length; row++) {
            if (map[board[row][col]]) return false;
            map[board[row][col]] = 1
        }
        map = {}
    }
    return true
}

const checkGrids = board => {
    let map = {}
    for (let gridRow = 0; gridRow < 3; gridRow++) {
        for (let gridCol = 0; gridCol < 3; gridCol++) {
            for (let row = 3 * gridRow; row < (3*gridRow)+3; row++) {
                for (let col = 3 * gridCol; col < (3*gridCol)+3; col++) {
                    if (map[board[row][col]]) return false;
                    map[board[row][col]] = 1
                }
            }
            map = {}
        }
    }
    return true
}

function doneOrNot(board){
    return (checkCols(board) && checkRows(board) && checkGrids(board)) ? 'Finished' : 'Try again!'
}