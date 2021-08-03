function toCamelCase(str) {
    if (str === '') return str;

    let delimiter = ' ';
    if (str.includes('-')) {
      delimiter = '-';
    }
    else if (str.includes('_')) {
      delimiter = '_';
    }

    let charArray = str.split('');
    let index = charArray.indexOf(delimiter);

    while (index != -1) {
      charArray[index+1] = charArray[index+1].toUpperCase();
      charArray.splice(index,1);
      index = charArray.indexOf(delimiter);
    }

    return charArray.join('');
}