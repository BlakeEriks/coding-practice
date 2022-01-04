var isPP = function(n){
    for (let i = 2; i <= n/2; i++) {
        let power = 2;
        while (true) {
            const cur = i**power
            if (cur === n) {
                return [i,power]
            }
            if (cur > n) {
                break
            }
            power++;
        }
    }
    return null;
}