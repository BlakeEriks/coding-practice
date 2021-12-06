#part 1
with open('day3-input.txt') as f:
    lines = f.read().split('\n')
    length = len(lines[0])
    countOnes = [0] * length
    for i in range(0, len(lines)):
        for j in range(0, length):
            if int(lines[i][j]) == 1:
                countOnes[j] += 1
    gamma = ''
    epsilon = ''
    for i in range(0, len(countOnes)):
        exp = 0
        if (countOnes[i] > len(lines)/2):
            gamma += '1'
            epsilon += '0'
        else:
            gamma += '0'
            epsilon += '1'
    
    print('part 1 result: ' + str(int(gamma, 2) * int(epsilon,2)))

#part 2
with open('day3-input.txt') as f:
    lines = f.read().split('\n')
    length = len(lines[0])

    ogr = lines
    csr = lines
    for i in range(0, length):
        if (len(ogr) == 1): break
        if len(ogr) == 2:
            if ogr[0][i] != ogr[1][i]:
                ogr = list(filter(lambda item: item[i] == '1', ogr))
                break

        countOnes = 0
        for j in range(0, len(ogr)):
            if int(ogr[j][i]) == 1:
                countOnes += 1

        if countOnes >= len(ogr)/2:
            ogr = list(filter(lambda item: item[i] == '1', ogr))
        else:
            ogr = list(filter(lambda item: item[i] == '0', ogr)) 
    
    for i in range(0, length):
        if len(csr) == 1: break
        if len(csr) == 2:
            if csr[0][i] != csr[1][i]:
                csr = list(filter(lambda item: item[i] == '0', csr))
                break
        
        countOnes = 0
        for j in range(0, len(csr)):
            if int(csr[j][i]) == 1:
                countOnes += 1

        if countOnes >= len(csr)/2:
            csr = list(filter(lambda item: item[i] == '0', csr))
        else:
            csr = list(filter(lambda item: item[i] == '1', csr))
    
    csr = csr[0]
    ogr = ogr[0]
    print ('part 2 result: ' + str(int(ogr, 2) * int(csr, 2)))