function incrementString (strng) {
    let num = '', str =''
    for (char of strng) {
        const asNum = parseInt(char)
        if (!isNaN(asNum)) {
            num += char
        }
        else {
            str += num
            str += char
            num = ''
        }
    }
    zeroChars = ''
    for (char of num) {
        if (char === '0') zeroChars += '0'
        else break
    }
    if (parseInt(num) === 0) return str + zeroChars.substring(1) + '1'
    if (parseInt(num).toString().length < (parseInt(num)+1).toString().length) {
        if (zeroChars.length > 0) {
            zeroChars = zeroChars.substring(1)
        }
    }
    return num ? str + zeroChars + (parseInt(num)+1) : str + '1'
}