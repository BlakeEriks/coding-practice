import copy

class node:
    def __init__(self,bigCave):
        self.bigCave = bigCave
        self.paths = []
        self.visited = 0
    def __str__(self):
        return str(self.visited) + str(self.paths)
    def __repr__(self):
        return self.__str__()

def getAllPaths(curPath, caveNodes, results):
    curNode = curPath[-1]
    if curNode == 'end':
        results.append(curPath)
        return

    curCave = caveNodes[curNode]
    caveNodes[curNode].visited = 1
    for node in curCave.paths:
        cave = caveNodes[node]
        if cave.bigCave or not cave.visited:
            getAllPaths(curPath + [node], copy.deepcopy(caveNodes), results)

# Part 1
with open('day12-input.txt') as f:
    lines = f.read().splitlines()
    caveNodes = {}
    for line in lines:
        path = line.split('-')
        first = path[0]
        second = path[1]
        firstCave, secondCave = '', ''
        if first in caveNodes.keys():
            firstCave = caveNodes[first]
        else:
            firstCave = node(first == first.upper())

        if second in caveNodes.keys():
            secondCave = caveNodes[second]
        else:
            secondCave = node(second == second.upper())

        firstCave.paths.append(second)
        secondCave.paths.append(first)
        caveNodes[first] = firstCave
        caveNodes[second] = secondCave
        
    paths = []

    getAllPaths(['start'], caveNodes.copy(), paths)
    print(len(paths))

def getAllPaths2(curPath, caveNodes, results, twoVisits):
    curNode = curPath[-1]
    if curNode == 'end':
        results.append(curPath)
        return
    
    curCave = caveNodes[curNode]
    if not curCave.bigCave:
        caveNodes[curNode].visited += 1
    for node in curCave.paths:
        cave = caveNodes[node]
        newTwoVisits = twoVisits
        if (cave.bigCave or cave.visited < 2) and node != 'start':
            if cave.visited == 1:
                if twoVisits:
                    continue
                else:
                    newTwoVisits = True
            getAllPaths2(curPath + [node], copy.deepcopy(caveNodes), results, newTwoVisits)

# Part 2
with open('day12-input.txt') as f:
    lines = f.read().splitlines()
    caveNodes = {}
    for line in lines:
        path = line.split('-')
        first = path[0]
        second = path[1]
        firstCave, secondCave = '', ''
        if first in caveNodes.keys():
            firstCave = caveNodes[first]
        else:
            firstCave = node(first == first.upper())

        if second in caveNodes.keys():
            secondCave = caveNodes[second]
        else:
            secondCave = node(second == second.upper())

        firstCave.paths.append(second)
        secondCave.paths.append(first)
        caveNodes[first] = firstCave
        caveNodes[second] = secondCave
        
    paths = []

    getAllPaths2(['start'], caveNodes.copy(), paths, False)

    print(len(paths))