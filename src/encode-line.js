const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];

  let amount = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      amount++;
      if (i === (str.length - 2)) {
        res.push(amount + str[i])
      }
    }
    else {
      res.push(amount + str[i])
      amount = 1;
      if (i === (str.length - 2)) {
        res.push(str[str.length-1])
      }
    }
    console.log(i, res)
  }

  return res.join('').split('').filter(e => e !== '1').join('')
}

module.exports = {
  encodeLine
};
