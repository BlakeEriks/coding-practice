function findUniq(arr) {
    numSet = {};
    for ( let i = 0; i < arr.length-2; i++ ) {
        let cur = arr[i], next = arr[i+1], nextnext = arr[i+2];
        if (cur === next && cur === nextnext) continue;
        if (cur === next) return nextnext;
        if (cur === nextnext) return next;
        return cur;
    }
    return null;
}