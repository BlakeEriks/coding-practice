// return masked string
const replaceAt = (string, index, replacement) => {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}

function maskify(cc) {
  if (cc.length <= 4) return cc;
  for (let i = 0; i < cc.length-4; i++) {
    cc = replaceAt(cc, i, "#");
  }
  return cc;
}