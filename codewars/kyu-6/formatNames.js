function list(names){
    if (!names.length) return '';
    if (names.length === 1) return names[0].name;
    let ret = '';
    for (let i = 0; i < names.length - 2; i++) {
        ret += names[i].name + ', ';
    }
    ret += names[names.length - 2].name + ' & ' + names[names.length - 1].name;
    return ret;
}