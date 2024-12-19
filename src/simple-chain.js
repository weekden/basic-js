const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	result: [],

	getLength() {
		return this.chain.length;
	},
	addLink(value = '') {
		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (!position || 
			position > this.chain.length ||
			position <= 0 ||
			typeof position !== 'number'
		) {
			this.chain = [];
			throw new Error(`You can't remove incorrect link!`);
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		const result = this.chain.splice(-this.getLength());
		this.chain = [];
		return result.join('~~');
	},
};

module.exports = {
	chainMaker,
};
