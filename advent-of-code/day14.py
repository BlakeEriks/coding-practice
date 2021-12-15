from collections import Counter

with open('day14-input.txt') as f:
    lines = f.read().splitlines()
    polymerTemplate = list(lines[0])
    insertionRules = {}
    for rule in lines[2:]:
        split = rule.split(' -> ')
        insertionRules[split[0]] = split[1]
    
    for step in range(0, 10):
        index = 0
        while index < len(polymerTemplate) - 1:
            polymerPair = ''.join(polymerTemplate[index:index+2])
            polymerTemplate.insert(index+1,insertionRules[polymerPair])
            index += 2

    histogram = Counter(polymerTemplate)
    diff = max(histogram.values()) - min(histogram.values())
    print(diff)

with open('day14-input.txt') as f:
    lines = f.read().splitlines()
    polymerTemplate = {}
    starterTemplate = lines[0]
    for i in range(0, len(starterTemplate)-1):
        polymerPair = ''.join(starterTemplate[i:i+2])
        polymerTemplate[polymerPair] = polymerTemplate.get(polymerPair, 0) + 1

    insertionRules = {}
    for rule in lines[2:]:
        split = rule.split(' -> ')
        insertionRules[split[0]] = split[1]
    
    for step in range(0, 40):
        nextTemplate = {}
        for polymer, count in polymerTemplate.items():
            newPolymer = insertionRules[polymer]
            newPair = polymer[0] + newPolymer
            nextTemplate[newPair] = nextTemplate.get(newPair, 0) + count
            newPair = newPolymer + polymer[1]
            nextTemplate[newPair] = nextTemplate.get(newPair, 0) + count
        polymerTemplate = nextTemplate

    histogram = {}
    for polymer, count in polymerTemplate.items():
        histogram[polymer[0]] = histogram.get(polymer[0], 0) + count
        histogram[polymer[1]] = histogram.get(polymer[1], 0) + count

    diff = max(histogram.values()) - min(histogram.values())
    print(diff/2)