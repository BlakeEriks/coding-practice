class Piece:
    def __init__(self, num):
        self.num = num
        self.called = False

    def __str__(self):
        return str(self.num) + ' ' + str(self.called)

    def __repr__(self):
        return self.__str__()

def isWon(board):
    # Check rows for victory
    for i in range(0, len(board)):
        isWon = True
        for j in range(0, len(board[0])):
            if not board[i][j].called:
                isWon = False
                break
        if isWon:
            return True

    # Check cols for victory
    for i in range(0, len(board[0])):
        isWon = True
        for j in range(0, len(board)):
            if not board[j][i].called:
                isWon = False
                break
        if isWon:
            return True
    
    return False

# Part 1
with open('day4-input.txt') as f:
    lines = f.read().split('\n')
    nums = lines[0].split(',')
    boards = []
    curBoard = []

    for i in range(2, len(lines)):
        if lines[i] == '':
            boards.append(curBoard)
            curBoard = []
        else:
            curRow = []
            for i in lines[i].split():
                curRow.append(Piece(i))
            curBoard.append(curRow)
    
    victoryBoard = None
    lastNum = None

    for num in nums:
        if (victoryBoard):
            break
        for board in boards:
            for row in board:
                for piece in row:
                    if piece.num == num:
                        piece.called = True
            if isWon(board):
                victoryBoard = board
                lastNum = num

    sum = 0
    for row in victoryBoard:
        for piece in row:
            if not piece.called:
                sum += int(piece.num)

    print('Part One Result ' + str(sum * int(lastNum)))

# Part 2
with open('day4-input.txt') as f:
    lines = f.read().split('\n')
    nums = lines[0].split(',')
    boards = []
    curBoard = []

    for i in range(2, len(lines)):
        if lines[i] == '':
            boards.append(curBoard)
            curBoard = []
        else:
            curRow = []
            for i in lines[i].split():
                curRow.append(Piece(i))
            curBoard.append(curRow)
    
    loserBoard = None
    lastNum = None
    completed = []

    for i in range(0, len(nums)):
        num = nums[i]
        if loserBoard: 
            break
        for board in boards:
            if board in completed:
                continue
            for row in board:
                for piece in row:
                    if piece.num == num:
                        piece.called = True
            if isWon(board):
                completed.append(board)
                if len(completed) == len(boards):
                    loserBoard = board
                    lastNum = num

    sum = 0
    for row in loserBoard:
        for piece in row:
            if not piece.called:
                sum += int(piece.num)

    print('Part Two Result ' + str(sum * int(lastNum)))