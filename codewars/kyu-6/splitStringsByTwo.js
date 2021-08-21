function splitStringsByTwo(str){
   let arr = [];
   for (let i = 0; i < str.length; i += 2) {
       let first = str.charAt(i);
       let second = (i+1 < str.length) ? str[i+1] : '_';
       arr.push(first+second);
   }
   return arr;
}