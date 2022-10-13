const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res = [];
  let arr = str.split("");
  arr = arr.map((elem) => {
    if (res.length == 0 || elem != res[res.length - 1]) res.push(1, elem);
    else if (elem == res[res.length - 1]) res[res.length - 2]++;
  });
  return res.filter((elem) => elem != 1).join("");
}

module.exports = {
  encodeLine
};
