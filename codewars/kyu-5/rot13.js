const incChar = (char, inc) => {
    let retChar = char;
    while (inc > 0) {
        if (retChar === 'z') retChar = 'a';
        else if (retChar === 'Z') retChar = 'A';
        else retChar = String.fromCharCode(retChar.charCodeAt(0) + 1);
        inc--;
    }
    return retChar;
}

const getRot13Map = () => {
    let charMap = {}, curChar = 'a';
    for (i = 0; i < 26; i++) {
        charMap[curChar] = incChar(curChar, 13);
        charMap[curChar.charAt(0).toUpperCase()] = incChar(curChar.charAt(0).toUpperCase(), 13);
        curChar = incChar(curChar, 1);
    }
    return charMap;
}

function rot13(message){
    let arr = message.split('');
    charMap = getRot13Map();
    for (let i = 0; i < message.length; i++) {
        if (charMap[arr[i]]) arr[i] = charMap[arr[i]];
    }
    return arr.join('');
}