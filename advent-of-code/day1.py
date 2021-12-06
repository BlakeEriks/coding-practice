with open('day1-input.txt') as f:
    lines = f.read().splitlines()
    for i in range(0, len(lines)-3):
        sum1 = (int(lines[i]) + int(lines[i+1]) + int(lines[i+2]))
        sum2 = (int(lines[i+1]) + int(lines[i+2]) + int(lines[i+3]))
        if sum2 > sum1:
            countInc += 1
    print(countInc)