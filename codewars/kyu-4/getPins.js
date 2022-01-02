const getPossibleForNum = num => {
    if (num === '1') return [1,2,4]
    if (num === '2') return [1,2,3,5]
    if (num === '3') return [2,3,6]
    if (num === '4') return [1,4,5,7]
    if (num === '5') return [2,4,5,6,8]
    if (num === '6') return [3,5,6,9]
    if (num === '7') return [4,7,8]
    if (num === '8') return [5,7,8,9,0]
    if (num === '9') return [6,8,9]
    if (num === '0') return [0,8]
    return null
}

const getPinsHelper = (pin, remaining, res) => {
    if (remaining.length === 0) {
        res.push(pin)
        return
    }
    const options = getPossibleForNum(remaining[0])
    remaining = remaining.substring(1)
    for (num of options) {
        getPinsHelper(pin + num, remaining, res)
    }
}

function getPINs(observed) {
    let res = []
    getPinsHelper('', observed, res)
    return res
}