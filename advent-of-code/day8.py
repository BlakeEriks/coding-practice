# Part 1
with open('day8-input.txt') as f:
    lines = f.read().splitlines()

    uniqueNums = 0
    for line in lines:
        split = line.split('|')
        outputs = split[1].split()
        for word in outputs:
            if len(word) in [2,3,4,7]:
                uniqueNums += 1
    print(uniqueNums)

# Part 2
with open('day8-input.txt') as f:
    lines = f.read().splitlines()
    total = 0
    for line in lines:
        split = line.split('|')
        inputs = split[0].split()
        signalMap = dict()
        one, two, three, four, five, six, seven, eight, nine = '', '', '', '', '', '', '', '', ''
        sixSegments = []

        stringToNum = [''] * 10

        for word in inputs:
            if (len(word) == 2): one = word
            if (len(word) == 3): seven = word
            if (len(word) == 4): four = word
            if (len(word) == 7): eight = word
            if (len(word) == 6): sixSegments.append(word)
        
        for word in sixSegments:
            if len(list(set(seven) - set(word))) > 0:
                six = word
            if len(list(set(four) - set(word))) == 0:
                nine = word
        zero = list(set(sixSegments) - set([six,nine]))[0]

        signalMap['a'] = list(set(seven) - set(one))[0]
        signalMap['d'] = list(set(eight) - set(zero))[0]
        signalMap['e'] = list(set(eight) - set(nine))[0]
        signalMap['c'] = list(set(eight) - set(six))[0]
        signalMap['f'] = list(set(one) - set(signalMap['c']))[0]
        signalMap['b'] = list(set(four) - set([signalMap['c'],signalMap['d'],signalMap['f']]))[0]
        signalMap['g'] = list(set(eight) - set(signalMap.values()))[0]
        inv_map = {v: k for k, v in signalMap.items()}

        decoder = {
            'abcefg': 0,
            'cf': 1,
            'acdeg': 2,
            'acdfg': 3,
            'bcdf': 4,
            'abdfg': 5,
            'abdefg': 6,
            'acf': 7,
            'abcdefg': 8,
            'abcdfg': 9
        }

        outputs = split[1].split()
        res = ''
        for output in outputs:
            decoded = ''
            for char in output:
                decoded += inv_map[char]
            sortedDecoded = sorted(decoded)
            num = decoder[''.join(sortedDecoded)]
            res += str(num)
        total += int(res)
    print(total)