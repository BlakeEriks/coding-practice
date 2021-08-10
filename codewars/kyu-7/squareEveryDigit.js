function squareDigits(num){
    if (num === 0) return num;
    let str = '';
    while (num > 0) {
      let curDig = num % 10;
      str = (curDig ** 2) + str;
      num = Math.floor(num / 10);
    }
    return parseInt(str);
}