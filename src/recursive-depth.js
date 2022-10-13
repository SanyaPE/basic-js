const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor(arr) {
    this.arr == arr;
  }
  calculateDepth(arr) {
    let depth = 1, level = 1
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        depth = this.calculateDepth(item)+1;
        if (depth > level) {
         level = depth;
        }
        depth = 1;
      }
    });
    return level;
  }
}

module.exports = {
  DepthCalculator
};
