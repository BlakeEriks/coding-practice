class lantern_fish_age_group:
    def __init__(self, remaining):
        self.remaining = remaining
    def __str__(self):
        return str(self.remaining)
    def __repr__(self):
        return self.__str__()

# Part 1
with open('day6-input.txt') as f:
    line = f.read().split(',')
    lantern_school = []
    for fish in line:
        lantern_school.append(int(fish))

    for day in range(0, 80):
        for i in range(0, len(lantern_school)):
            if lantern_school[i] == 0:
                lantern_school[i] = 6
                lantern_school.append(8)
            else:
                lantern_school[i] -= 1

    print(len(lantern_school))

# Part 2
with open('day6-input.txt') as f:
    line = f.read().split(',')
    lantern_school = [0] * 8
    for fish in line:
        lantern_school[int(fish)] += 1

    for day in range(0, 256):
        newSchool = [0] * 9
        for i in range(0, len(lantern_school)):
            if i == 0:
                newSchool[6] = lantern_school[i]
                newSchool[8] = lantern_school[i]
            else:
                newSchool[i-1] += lantern_school[i]
        lantern_school = newSchool.copy()

    # print(lantern_school)
    print(sum(lantern_school))