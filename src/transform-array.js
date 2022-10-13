const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  let arrOut = [];
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") i++;
    else if (arr[i] == "--discard-prev")
      arr[i - 2] != "--discard-next" ? arrOut.pop() : 0;
    else if (arr[i] == "--double-next")
      i < arr.length - 1 ? arrOut.push(arr[i + 1]) : 0;
    else if (arr[i] == "--double-prev")
      i >= 1 && arr[i - 2] != "--discard-next" ? arrOut.push(arr[i - 1]) : 0;
    else arrOut.push(arr[i]);
  }
  return arrOut;
}

module.exports = {
  transform
};
