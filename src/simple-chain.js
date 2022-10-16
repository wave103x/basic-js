const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  length: 0,
  arr: [],
  getLength() {
    return this.length
  },
  addLink(value) {
    this.arr.push(`( ${String(value) || ''} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || !this.arr[position]) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};