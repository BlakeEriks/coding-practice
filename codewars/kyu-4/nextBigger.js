let permutations = []

const permutateHelper = (arr, temp) => { // [5, 1, 3], [ ] -> [1, 3], [5] - [5, 3], [1]
    if (arr.length === 0) {
        permutations.push(temp)
        return
    }
    for (let i = 0; i < arr.length; i++) {
        let newTemp = temp.slice()
        let newArr = arr.slice()

        newTemp.push(arr[i])
        newArr.splice(i,1)
        permutateHelper(newArr, newTemp)
    }
}

function permutate(arr) {
    permutateHelper(arr, [])
}

function nextBigger(n){
    permutate(n.toString().split(''))
    if (permutations.length === 0 || permutations.length === 1) {
        return -1
    }
    let nextHighest = Infinity
    for (numArr of permutations) {
        let num = Number(numArr.join(''))
        if (num > n && num < nextHighest) {
            nextHighest = num
        }
    }
    return nextHighest != Infinity ? nextHighest : -1
}