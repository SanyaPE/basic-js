const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let match = 0;
  let countS1 = toCountString(s1);
  let countS2 = toCountString(s2);
  let arr = Object.keys(countS1).filter((elem) => countS2[elem]);
  arr.forEach((elem) => {
    match += countS1[elem] >= countS2[elem] ? countS2[elem] : countS1[elem];
  });
  function toCountString(string) {
    let result = {};
    for (let i = 0; i < string.length; i++) {
      result[string[i]] = result[string[i]] + 1 || 1;
    }
    return result;
  }
  return match;
}

module.exports = {
  getCommonCharacterCount,
};
