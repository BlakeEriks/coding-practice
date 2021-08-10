function isIsogram(str){
    let arr = str.split('');
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i].toLowerCase()] === 1) {
            return false;
        }
        else {
            map[arr[i].toLowerCase()] = 1;
        }
    }
    return true;
}