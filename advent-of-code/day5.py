class point:
    def __init__(self, coords):
        self.x = coords[0]
        self.y = coords[1]

    def __str__(self):
        return str(self.x) + ' ' + str(self.y)

    def __repr__(self):
        return self.__str__()

    def inline(self, point):
        return self.x == point.x or self.y == point.y

    def __eq__(self, another):
        self.x == another.x and self.y == another.y

# Part 1
with open('day5-input.txt') as f:
    lines = f.read().split('\n')
    split = []
    for line in lines:
        split.append(line.split(' -> '))

    coords = []
    for coord in split:
        coords.append([point(coord[0].split(',')), point(coord[1].split(','))])

    coords = list(filter(lambda points: points[0].inline(points[1]), coords))

    hits = {}

    for index in range(0, len(coords)):
        p1 = coords[index][0]
        p2 = coords[index][1]
        if p1.x == p2.x:
            if int(p1.y) > int(p2.y):
                p1, p2 = p2, p1
            for y in range(int(p1.y), int(p2.y)+1):
                p = str(p1.x)+','+str(y)
                if p in hits:
                    hits[p] += 1
                else:
                    hits[p] = 1
        else:
            if int(p1.x) > int(p2.x):
                p1, p2 = p2, p1
            for x in range(int(p1.x), int(p2.x)+1):
                p = str(x)+','+str(p1.y)
                if p in hits:
                    hits[p] += 1
                else:
                    hits[p] = 1

    hits = dict(filter(lambda elem: elem[1] > 1, hits.items()))
    print(len(hits))

# Part 2
with open('day5-input.txt') as f:
    lines = f.read().split('\n')
    split = []
    for line in lines:
        split.append(line.split(' -> '))

    coords = []
    for coord in split:
        coords.append([point(coord[0].split(',')), point(coord[1].split(','))])

    hits = {}

    for index in range(0, len(coords)):
        p1 = coords[index][0]
        p2 = coords[index][1]
        if p1.x == p2.x:
            if int(p1.y) > int(p2.y):
                p1, p2 = p2, p1
            for y in range(int(p1.y), int(p2.y)+1):
                p = str(p1.x)+','+str(y)
                if p in hits:
                    hits[p] += 1
                else:
                    hits[p] = 1
        elif p1.y == p2.y:
            if int(p1.x) > int(p2.x):
                p1, p2 = p2, p1
            for x in range(int(p1.x), int(p2.x)+1):
                p = str(x)+','+str(p1.y)
                if p in hits:
                    hits[p] += 1
                else:
                    hits[p] = 1
        else:
            if int(p1.x) > int(p2.x):
                p1, p2 = p2, p1
            yInc = 1
            if int(p1.y) > int(p2.y):
                yInc = -1
            count = 0
            for x in range(int(p1.x), int(p2.x)+1):
                p = str(x)+','+str(int(p1.y) + (count * yInc))
                if p in hits:
                    hits[p] += 1
                else:
                    hits[p] = 1
                count += 1

    hits = dict(filter(lambda elem: elem[1] > 1, hits.items()))
    print(len(hits))

# 21698