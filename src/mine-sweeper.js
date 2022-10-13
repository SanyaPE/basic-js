const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      let count = 0;
      let elem = matrix[row][column];
      //horisont
      if (column < matrix[row].length - 1 && matrix[row][column + 1] == true)
        count++;
      if (column > 0 && matrix[row][column - 1] == true) count++;
      //vertical
      if (row < matrix.length - 1 && matrix[row + 1][column] == true) count++;
      if (row > 0 && matrix[row - 1][column] == true) count++;
      //diagonal
      if (
        row < matrix.length - 1 &&
        column < matrix[row].length - 1 &&
        matrix[row + 1][column + 1] == true
      )
        count++;
      if (row > 0 && column > 0 && matrix[row - 1][column - 1] == true) count++;
      if (
        row < matrix.length - 1 &&
        column > 0 &&
        matrix[row + 1][column - 1] == true
      )
        count++;
      if (
        row > 0 &&
        column < matrix[row].length - 1 &&
        matrix[row - 1][column + 1] == true
      )
        count++;
      result[row][column] = count;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
