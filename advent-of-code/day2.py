#part 1
with open('day2-input.txt') as f:
    lines = f.read().splitlines()
    x = 0
    y = 0
    for i in range(0, len(lines)):
        command = lines[i].split(' ')
        if command[0] == 'forward':
            x += int(command[1])
        elif command[0] == 'down':
            y += int(command[1])
        elif command[0] == 'up':
            y -= int(command[1])
        else:
            print('invalid command')
    print(x, y, x*y)

#part 2
with open('day2-input.txt') as f:
    lines = f.read().splitlines()
    x = 0
    y = 0
    aim = 0
    for i in range(0, len(lines)):
        command = lines[i].split(' ')
        if command[0] == 'forward':
            x += int(command[1])
            y += aim * int(command[1])
        elif command[0] == 'down':
            aim += int(command[1])
        elif command[0] == 'up':
            aim -= int(command[1])
        else:
            print('invalid command')
    print(x, y, x*y)