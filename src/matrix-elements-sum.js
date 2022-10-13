const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let factor = {};
  let result = 0;
  matrix.forEach((elem, ind) => {
    for (let i = 0, length = elem.length; i < length; i++) {
      if (factor[i] == undefined) factor[i] = 1;
      if (elem[i] == 0) factor[i] = 0;
      else result += elem[i] * factor[i];
    }
  });
  return result;
}

module.exports = {
  getMatrixElementsSum
};
