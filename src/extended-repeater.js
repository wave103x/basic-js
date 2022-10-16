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
  if (typeof options.addition === 'boolean' || options.addition === null) options.addition += '';
  if (typeof options.additionSeparator === 'boolean' || options.additionSeparator === null) options.additionSeparator += '';

  const one = [];

  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  for (let i = 0; i < options.repeatTimes; i++) {
    one.push(str);

    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.addition) one.push(options.addition);
      else continue;

      if (options.additionSeparator && i !== options.additionRepeatTimes - 1) one.push(options.additionSeparator);
      else if (i !== options.additionRepeatTimes - 1) one.push('|');
    }

    if (options.separator && i !== options.repeatTimes - 1) one.push(options.separator);
    else if (i !== options.repeatTimes - 1) one.push('+');

  }

  return one.join('');
}

module.exports = {
  repeater
};
