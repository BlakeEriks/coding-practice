def getValidAdjacent(row, col):
    res = []
    for i in range(-1,2):
        for j in range(-1,2):
            if i == 0 and j == 0:
                continue
            newRow = row + i
            newCol = col + j
            if newRow >= 0 and newCol >= 0 and newRow < 10 and newCol < 10:
                res.append( (newRow, newCol) )
    return res

# Part 1
with open('day11-input.txt') as f:
    lines = f.read().splitlines()

    octopi = [[int(char) for char in line] for line in lines]
    totalFlashes = 0
    for x in range(0,100):
        flashed = set([])
        flashQueue = []
        for i in range(0, len(octopi)):
            for j in range(0, len(octopi[i])):
                if octopi[i][j] == 9 and (i,j) not in flashed:
                    flashed.add( (i,j) )
                    flashQueue.extend(getValidAdjacent(i,j))
                    octopi[i][j] = 0
                elif (i,j) not in flashed:
                    octopi[i][j] += 1

        while flashQueue:
            i,j = flashQueue.pop()
            # print(i,j)
            if octopi[i][j] == 9 and (i,j) not in flashed:
                flashed.add( (i,j) )
                flashQueue.extend(getValidAdjacent(i,j))
                octopi[i][j] = 0
            elif (i,j) not in flashed:
                octopi[i][j] += 1
        
        totalFlashes += len(flashed)
    print(totalFlashes)

# Part 2
with open('day11-input.txt') as f:
    lines = f.read().splitlines()

    octopi = [[int(char) for char in line] for line in lines]
    step = 1
    while True:
        flashed = set([])
        flashQueue = []
        for i in range(0, len(octopi)):
            for j in range(0, len(octopi[i])):
                if octopi[i][j] == 9 and (i,j) not in flashed:
                    flashed.add( (i,j) )
                    flashQueue.extend(getValidAdjacent(i,j))
                    octopi[i][j] = 0
                elif (i,j) not in flashed:
                    octopi[i][j] += 1

        while flashQueue:
            i,j = flashQueue.pop()
            # print(i,j)
            if octopi[i][j] == 9 and (i,j) not in flashed:
                flashed.add( (i,j) )
                flashQueue.extend(getValidAdjacent(i,j))
                octopi[i][j] = 0
            elif (i,j) not in flashed:
                octopi[i][j] += 1

        if len(flashed) == 100:
            break;
        step += 1
        
    print(step)