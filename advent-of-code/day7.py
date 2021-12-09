# Part 1
with open('day7-input.txt') as f:
    line = f.read().split(',')
    crabs = []
    for crab in line:
        crabs.append(int(crab))

    minFuel = 9223372036854775807

    for pos in range(0, max(crabs)):
        totalFuel = 0
        for i in range(0, len(crabs)):
            crab = crabs[i]
            totalFuel += abs(crab - pos)
        if totalFuel < minFuel:
            minFuel = totalFuel
    print(minFuel)


fuelDict = {}
totalFuel = 0
for i in range(0, 1000):
    totalFuel += i
    fuelDict[i] = totalFuel

def getFuelAmt(dist):
    if dist not in fuelDict:
        fuelAmt = dist + getFuelAmt(dist - 1)
        fuelDict[dist] = fuelAmt
    return fuelDict[dist]

# Part 2
with open('day7-input.txt') as f:
    line = f.read().split(',')
    crabs = []
    for crab in line:
        crabs.append(int(crab))

    minFuel = 9223372036854775807
    
    for pos in range(0, max(crabs)):
        totalFuel = 0
        for i in range(0, len(crabs)):
            crab = crabs[i]
            totalFuel += getFuelAmt(abs(crab-pos))
        if totalFuel < minFuel:
            minFuel = totalFuel
    print(minFuel)
