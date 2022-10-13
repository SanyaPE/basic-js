const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != "number" ||
      position > this.str.length ||
      Number.isInteger(position) == false ||
      position < 1
    ) {
      this.str = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let out = ([...chainMaker.str].join("~~")).toString()
    this.str = [];
    return out;
  },
};

module.exports = {
  chainMaker
};
