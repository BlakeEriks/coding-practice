COL_MAX, ROW_MAX = 0,0
def getValidAdjacent(coord):
    ret = []
    row, col = coord
    for i in range(-1,2):
        for j in range(-1, 2):
            if (i == 0 and j == 0 or i != 0 and j != 0): continue
            newRow, newCol = row + i, col + j
            if (newRow >= 0 and newCol >= 0 and newRow < ROW_MAX and newCol < COL_MAX):
                ret.append((newRow, newCol))
    return ret

def getRiskForPath(path):
    return sum([int(risk) for risk in path])

def getExpanded():
    ll = [[int(y) for y in x] for x in open('day15-input.txt').read().strip().split('\n')]

    def inr(pos, arr):
        return pos[0] in range(len(arr)) and pos[1] in range(len(arr[0]))

    expanded = [[0 for x in range(5*len(ll[0]))] for y in range(5*len(ll))]

    for x in range(len(expanded)):
        for y in range(len(expanded[0])):
            dist = x//len(ll) + y//len(ll[0])
            newval = ll[x%len(ll)][y%len(ll[0])]
            for i in range(dist):
                newval+=1
                if newval==10:
                    newval=1
            expanded[x][y] = newval

    return expanded

# Part 1
with open('day15-input.txt') as f:
    lines = f.read().splitlines()
    COL_MAX, ROW_MAX = len(lines[0]), len(lines)
    totalRisk = 0
    startingNode = (totalRisk, 0, 0)
    queue = [ startingNode ]
    visited = [[-1 for j in range(0,COL_MAX)] for i in range(0,ROW_MAX)]
    bestPath = None

    while len(queue) > 0:
        risk, row, col = queue.pop(0)
        if (row == ROW_MAX-1 and col == COL_MAX - 1):
            print(risk)
            break
        for r, c in getValidAdjacent((row,col)):
            newRisk = risk + int(lines[r][c])
            existingRisk = visited[r][c]
            if existingRisk == -1 or newRisk < existingRisk:
                visited[r][c] = newRisk
                queue.insert(0, (newRisk, r, c))
        queue = sorted(queue)

    for i in visited:
        print(i[0:30])

# Part 2
with open('day15-input.txt') as f:
    lines = [[int(risk) for risk in line] for line in f.read().splitlines()]
    COL_MAX, ROW_MAX = len(lines[0]), len(lines)
    for x in range(1, 5):
        nextMap = []
        for row in range(0, ROW_MAX):
            nextRow = []
            for col in range(0, COL_MAX):
                nextVal = lines[row][col] + x
                if nextVal >= 10: nextVal = (nextVal % 10) + 1
                nextRow.append(nextVal)
            nextMap.append(nextRow)
        lines.extend(nextMap)

    for line in lines:
        for x in range(0, COL_MAX*4):
            nextVal = line[-COL_MAX] + 1
            if nextVal >= 10: nextVal = (nextVal % 10) + 1
            line.append(nextVal)

    COL_MAX, ROW_MAX = len(lines[0]), len(lines)

    totalRisk = 0
    queue = [ (totalRisk, 0, 0) ]
    visited = [[-1 for j in range(0,COL_MAX)] for i in range(0,ROW_MAX)]
    bestPath = None

    while len(queue) > 0:
        risk, row, col = queue.pop(0)
        if (row == ROW_MAX-1 and col == COL_MAX - 1):
            print(risk)
            break
        for r, c in getValidAdjacent((row,col)):
            newRisk = risk + lines[r][c]
            existingRisk = visited[r][c]
            if existingRisk == -1 or newRisk < existingRisk:
                visited[r][c] = newRisk
                queue.insert(0, (newRisk, r, c))
        queue = sorted(queue)