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
  const arr = Array.from(String(n));
  let max = 0;
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let one = arr.map( (e,index) => {
      if (index !== i) return e;
      else return
    })
    let two = arr.map( (e,index) => {
      if (index !== i+1) return e;
      else return
    })
    if (+one.join('') < +two.join('')) temp = +two.join('')
    else temp = +one.join('');
    if (temp > max) max = temp;
  }
  return max;
}


module.exports = {
  deleteDigit
};
