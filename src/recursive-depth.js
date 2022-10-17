const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1;

  calculateDepth(arr) {
  this.depth = finder(arr);
  function finder(arr) {
    if (!Array.isArray(arr)) return 1;
    let depth = 1;
    let tmp = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        depth = depth + finder(item)
        if (depth > tmp) tmp = depth;
        depth = 1;
      }
    }
    return tmp;
  }
  return this.depth;
  }
}

module.exports = {
  DepthCalculator
};