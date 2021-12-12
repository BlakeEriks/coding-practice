closeDict = {'{': '}', '[': ']', '<':'>', '(': ')'}
scoreMap = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
}

# Part 1
with open('day10-input.txt') as f:
    lines = f.read().splitlines()
    badClosers = []
    for line in lines:
        stack = []
        for char in line:
            if char in closeDict.keys():
                stack.append(char)
            else:
                if len(stack) > 0:
                    open = stack.pop()
                    if closeDict[open] != char:
                        badClosers.append(char)
                        break
                else:
                    break

    score = 0
    for char in badClosers:
        score += scoreMap[char]
    print(score)

scoreMap = {')': 1, ']': 2, '}': 3, '>': 4}

# Part 2
with open('day10-input.txt') as f:
    lines = f.read().splitlines()
    completionStrings = []
    for line in lines:
        stack = []
        corrupt = False
        for char in line:
            if char in closeDict.keys():
                stack.append(char)
            else:
                if len(stack) > 0:
                    open = stack.pop()
                    if closeDict[open] != char:
                        corrupt = True
                        break
                else:
                    break
        completionString = []
        if len(stack) > 0 and not corrupt:
            while len(stack) > 0:
                char = stack.pop()
                completionString.append(closeDict[char])
            completionStrings.append(completionString)
    
    scores = []
    for s in completionStrings:
        score = 0
        for char in s:
            score *= 5
            score += scoreMap[char]
        scores.append(score)

    scores.sort()
    print(scores[len(scores)//2])
