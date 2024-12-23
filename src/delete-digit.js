const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = String(n).split("");
  let arrDeleteDigit = [];
  for (let i = 0; i < nArr.length; i += 1) {
    let current = nArr.slice();  
    current.splice(i, 1);  
    arrDeleteDigit.push(Number(current.join("")));
  }
  return Math.max(...arrDeleteDigit);
}

module.exports = {
  deleteDigit
};
