const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
	const filterArr = arr.filter(n => n != -1);
	const sortFilterArr = filterArr.sort((a, b) => a - b);
	arr.forEach((item, index) => {
		if (item === -1) {
			sortFilterArr.splice(index, 0, item);
		}
	});
	return sortFilterArr;
}

module.exports = {
  sortByHeight
};
