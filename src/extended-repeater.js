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
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let add = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
  let addSliced = add.slice(0, add.length - additionSeparator.length);
  let newStr = `${str}${addSliced}${separator}`.repeat(repeatTimes)
  return newStr.slice(0, newStr.length - separator.length);
}

module.exports = {
  repeater
};
