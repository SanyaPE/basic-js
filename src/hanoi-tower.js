const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  let [turns,seconds] = [0,0]
  for (i=0;i<disksNumber;i++){
    turns = (turns*2)+1
  }
  seconds =  Math.floor(turns * 3600 / turnsSpeed)
  return {turns,seconds }
}

module.exports = {
  calculateHanoi
};
