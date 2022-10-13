const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
 function getSeason(date) {
  const seasons = {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
  };
  if (!date) return "Unable to determine the time of year!";
  try {
    date.toTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();
  for (i in seasons) {
    if (seasons[i].includes(month + 1)) return i;
  }
}

module.exports = {
  getSeason
};
