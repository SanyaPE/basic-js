const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  let domainsSplit = domains.map((elem) => elem.split("."));
  let arr = domainsSplit.map((elem) => toDns(elem)).flat();
  arr.forEach((domain) => (result[domain] = result[domain] + 1 || 1));
  return result;

  function toDns(arr) {
    let dnsArr = [];
    arr.reverse().forEach((elem, ind) => {
      if (dnsArr.length == 0) dnsArr.push(`.${elem}`);
      else dnsArr.push(`${dnsArr[ind - 1]}.${elem}`);
    });
    return dnsArr;
  }
}

module.exports = {
  getDNSStats
};
