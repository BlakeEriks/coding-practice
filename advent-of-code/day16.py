class packet_literal:
    def __init__(self, val, end_pos):
        self.val = val
        self.end_pos = end_pos

    def __str__(self):
        return(' Value: ' + str(self.val) + ' End Pos: ' + str(self.end_pos))

def parse_packet_literal(packet):
    val = ''
    i = 6
    while True:
        val += packet[i+1:i+5]
        indicator = packet[i]
        i += 5
        if not int(indicator):
            break
    return packet_literal(int(val,2), i)
        
def packet_compute(type, vals):
    if type == 0:
        return sum(vals)
    elif type == 1:
        res = 1
        for val in vals:
            res *= val
        return res
    elif type == 2:
        return min(vals)
    elif type == 3:
        return max(vals)
    elif type == 5:
        if vals[0] > vals[1]:
            return 1
        else:
            return 0
    elif type == 6:
        if vals[0] < vals[1]:
            return 1
        else:
            return 0
    elif type == 7:
        if vals[0] == vals[1]:
            return 1
        else:
            return 0

def parse_packet(packet, version_arr):

    version = int(packet[:3], 2)
    version_arr.append(version)
    packet_type_id = int(packet[3:6], 2)

    if packet_type_id == 4:
        return parse_packet_literal(packet)

    length_type_id = int(packet[6:7], 2)
    offset = 0
    vals = []
    if length_type_id:
        sub_packet_count = int(packet[7:18], 2)
        for i in range(0, sub_packet_count):
            new_packet = parse_packet(packet[18+offset:], version_arr)
            offset += new_packet.end_pos
            vals.append(new_packet.val)
        return packet_literal(packet_compute(packet_type_id, vals), 18+offset)
    else:
        sub_packet_total_length = int(packet[7:22], 2)
        while offset < sub_packet_total_length:
            new_packet = parse_packet(packet[22+offset:], version_arr)
            offset += new_packet.end_pos
            vals.append(new_packet.val)
        return packet_literal(packet_compute(packet_type_id, vals), 22+offset)

with open('day16-input.txt') as f:
    input = f.read()
    bin_str = bin(int(input, 16))[2:].zfill(len(input)*4)
    versions = []
    res = parse_packet(bin_str, versions)
    print('Part 1: ' + str(sum(versions)))
    print('Part 2: ' + str(res.val))