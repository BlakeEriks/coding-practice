# Part 1
with open('day9-input.txt') as f:
    lines = f.read().splitlines()
    heatMap = []
    for i in range(0,len(lines)):
        line = lines[i]
        row = []
        for num in line:
            row.append(num)
        heatMap.append(row)
    
    heatSum = 0
    lowPoints = []

    for i in range(0, len(heatMap)):
        for j in range(0, len(heatMap[0])):
            checkI, checkJ = i-1,j
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if int(heatMap[i][j]) >= int(heatMap[checkI][checkJ]):
                    continue
                
            checkI, checkJ = i+1,j
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if int(heatMap[i][j]) >= int(heatMap[checkI][checkJ]):
                    continue
            checkI, checkJ = i,j-1
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if int(heatMap[i][j]) >= int(heatMap[checkI][checkJ]):
                    continue
            checkI, checkJ = i,j+1
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if int(heatMap[i][j]) >= int(heatMap[checkI][checkJ]):
                    continue
            print('low point at ' + str(i) + ' ' + str(j))
            lowPoints.append([i,j])
            heatSum += 1 + int(heatMap[i][j])

    print(lowPoints)
    print(heatSum)

def inBounds(rowSize, colSize, row, col):
    return row >= 0 and row < rowSize and col >= 0 and col < colSize

def getAdjacent(row, col):
    return [[row-1,col], [row+1,col], [row,col-1], [row,col+1]]

def getBasinSize(heatMap, start):
    size = 0
    queue = [start]
    rowSize = len(heatMap)
    colSize = len(heatMap[0])
    while (len(queue) > 0):
        row, col = queue.pop()
        if not heatMap[row][col]['basinChecked']:
            heatMap[row][col]['basinChecked'] = True
            size += 1
            for newRow, newCol in getAdjacent(row,col):
                if inBounds(rowSize, colSize, newRow, newCol) and (not heatMap[newRow][newCol]['basinChecked']) and heatMap[newRow][newCol]['val'] != 9:
                    queue.insert(0,[newRow,newCol])

    return size
            
# Part 2
with open('day9-input.txt') as f:
    lines = f.read().splitlines()
    heatMap = []
    for i in range(0,len(lines)):
        line = lines[i]
        row = []
        for num in line:
            row.append({'val': int(num), 'basinChecked': False})
        heatMap.append(row)
    
    heatSum = 0
    lowPoints = []

    for i in range(0, len(heatMap)):
        for j in range(0, len(heatMap[0])):
            checkI, checkJ = i-1,j
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if heatMap[i][j]['val'] >= heatMap[checkI][checkJ]['val']:
                    continue
            checkI, checkJ = i+1,j
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if heatMap[i][j]['val'] >= heatMap[checkI][checkJ]['val']:
                    continue
            checkI, checkJ = i,j-1
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if heatMap[i][j]['val'] >= heatMap[checkI][checkJ]['val']:
                    continue
            checkI, checkJ = i,j+1
            if checkI >= 0 and checkI < len(heatMap) and checkJ >= 0 and checkJ < len(heatMap[0]):
                if heatMap[i][j]['val'] >= heatMap[checkI][checkJ]['val']:
                    continue
            lowPoints.append([i,j])
            
    sums = []
    for p in lowPoints:
        sums.append(getBasinSize(heatMap, p))
    sums.sort(reverse=True)
    total = 1
    for num in sums[0:3]:
        total *= num
    print(total)