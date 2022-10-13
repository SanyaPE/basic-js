const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition =
    options.addition !== undefined ? String(options.addition) : null;
  let additionSeparator = options.additionSeparator || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let out1 = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    out1.push(addition);
  }
  out1 = out1.join(`${additionSeparator}`);

  let out = [];
  for (let i = 0; i < repeatTimes; i++) {
    out.push(str + out1);
  }
  out = out.join(`${separator}`);
  return out;
}

module.exports = {
  repeater
};
