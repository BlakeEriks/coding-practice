const removeDups = arr => {
    let set = {};
    for (let num of arr) {
      if (!set[num]) set[num] = 1;
    }
    newArr = [];
    for (const [key, value] of Object.entries(set)) {
        newArr.push(parseInt(key));
    }

    return newArr;
}
  
function comp(array1, array2){
    if (!array1 || !array2) return false;
    let a1 = removeDups(array1), a2 = removeDups(array2);
    console.log(a1,a2);
    if (a1.length != a2.length) return false;
    return a1.every(item => a2.includes(item * item));
}