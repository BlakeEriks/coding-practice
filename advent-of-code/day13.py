with open('day13-input.txt') as f:
    lines = f.read().splitlines()
    points = set([])
    folds = []
    afterBreak = False
    for line in lines:
        if afterBreak:
            folds.append(line)
        else:
            if line:
                points.add(tuple([int(p) for p in line.split(',')]))
            else:
                afterBreak = True

    xRange = max([point[0] for point in points])
    yRange = max([point[1] for point in points])

    paper = []
    for y in range(0, yRange+1):
        curRow = []
        for x in range(0, xRange+1):
            if (x,y) in points:
                curRow.append('#')
            else:
                curRow.append('.')
        paper.append(curRow)

    folds = [tuple(fold.split(' ')[2].split('=')) for fold in folds]
    for axis, magnitude in folds:
        magnitude = int(magnitude)
        newPaper = []
        countDots = 0
        if axis == 'y':
            for y in range(0,magnitude):
                curRow = []
                for x in range(0, len(paper[y])):
                    if paper[y][x] == '#' or paper[(magnitude-y)+magnitude][x] == '#':
                        curRow.append('#')
                    else:
                        curRow.append('.')
                newPaper.append(curRow)
        if axis == 'x':
            for y in range(0,len(paper)):
                curRow = []
                for x in range(0, magnitude):
                    if paper[y][x] == '#' or paper[y][(magnitude-x)+magnitude] == '#':
                        curRow.append('#')
                    else:
                        curRow.append('.')
                newPaper.append(curRow)
        paper = newPaper
    for i in paper:
        print(i)
    # INSPECT OUTPUT
