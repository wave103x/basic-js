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
  if (domains.length === 0) return {};
  domains = domains.map(e => {
    return e.split('.').reverse().join('.');
  })
  
  let res = {};
  let dot = '.';

  domains.forEach(e => res[dot.concat(e)] = 0)

  for (let item of domains) {
    domains.forEach(e => {
      if (e.includes(item)) res[dot.concat(item)] += 1;
    })
  }

  let common = domains[0].split('.')[0];
  res[dot.concat(common)] = domains.length;

  return res
}

module.exports = {
  getDNSStats
};
