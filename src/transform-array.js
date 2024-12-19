const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length === 0) return [];
  
	let newArr = [];
	const doubleNext = '--double-next';
	const doublePrev = '--double-prev';
	const discardNext = '--discard-next';
	const discardPrev = '--discard-prev';

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case doubleNext:
				if (i !== arr.length - 1) {
					newArr.push(arr[i + 1]);
				}
				break;

			case doublePrev:
				if (i > 0 && arr[i - 2] !== discardNext) {
					newArr.push(arr[i - 1]);
				}
				break;

			case discardPrev:
				if (i > 0 && arr[i - 2] !== discardNext) {
					newArr.pop();
				}
				break;

			case discardNext:
				if (i !== arr.length - 1) {
					i++;
				}
				break;

			default:
				newArr.push(arr[i]);
		}
	}

	return newArr;
}

module.exports = {
	transform,
};
