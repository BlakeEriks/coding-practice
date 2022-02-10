/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
   let i = 0, j = 0
   res = []
   while (i !== firstList.length && j !== secondList.length) {
     const [startI, endI] = firstList[i]
     const [startJ, endJ] = secondList[j]
     const intersection = [Math.max(startI, startJ), Math.min(endI, endJ)]
     if (intersection[1] >= intersection[0]) {
       res.push(intersection)
     }
     if (endI < endJ) {
       i++
     }
     else {
       j++
     }
   } 
   return res
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]))

