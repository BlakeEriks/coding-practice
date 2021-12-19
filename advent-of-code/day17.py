with open('day17-input.txt') as f:
    xrange, yrange = [spread.split('=')[1].split('..') for spread in f.read().replace(',', '').split(' ')[2:]]
    xrange = (int(xrange[0]), int(xrange[1]))
    yrange = (int(yrange[0]), int(yrange[1]))

    solutions = set()
    for xVel in range(-100, xrange[1]+1):
        for yVel in range(-150, 150):
            x,y = 0,0
            curXVel, curYVel = xVel, yVel
            maxY = 0
            while x <= xrange[1] and y > yrange[0]:
                x += curXVel
                y += curYVel
                if y > maxY: maxY = y
                if ( x in range(xrange[0], xrange[1] + 1) and y in range(yrange[0], yrange[1] + 1) ):
                    solutions.add((xVel, yVel))
                    break
                if curXVel > 0:
                    curXVel -= 1
                curYVel -= 1

    print(len(solutions))