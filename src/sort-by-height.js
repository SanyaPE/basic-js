const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrSort = arr.filter(elem=>elem!=-1).sort((a,b)=>a-b);
  let count = 0
  let result = []
  arr.forEach(element => {
    if (element!=-1) {
      result.push(arrSort[count])
      count++
    } else result.push(element)
  });
return result
}

module.exports = {
  sortByHeight
};
