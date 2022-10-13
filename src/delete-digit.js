const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max = null;
  let arr = JSON.stringify(n).split("");
  for (let i = 0; i < arr.length; i++) {
    let digit = +[...arr].filter((elem, ind) => ind != i).join("");
    if (digit > max) max = digit;
  }
  return max;
}

module.exports = {
  deleteDigit
};
