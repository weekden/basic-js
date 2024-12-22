const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const result = new Array(matrix.length);

	for (let i = 0; i < matrix.length; i++) {
		result[i] = [];

		for (let j = 0; j < matrix[i].length; j++) {
			let count = 0;
			let leftItem = j > 0 ? matrix[i][j - 1] : false;
			let rightItem = j < matrix[i].length - 1 ? matrix[i][j + 1] : false;
			let topItem = i > 0 ? matrix[i - 1][j] : false;
			let bottomItem = i < matrix.length - 1 ? matrix[i + 1][j] : false;
			let leftTopItem = i > 0 && j > 0 ? matrix[i - 1][j - 1] : false;
			let leftBottomItem =
				i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : false;
			let rightTopItem =
				i > 0 && j < matrix[i].length - 1 ? matrix[i - 1][j + 1] : false;
			let rightBottomItem =
				i < matrix.length - 1 && j < matrix[i].length - 1
					? matrix[i + 1][j + 1]
					: false;
      if(rightItem) count++
			if (leftItem) count++;
			if (topItem) count++;
			if (bottomItem) count++;
			if (leftTopItem) count++;
			if (leftBottomItem) count++;
      if (rightTopItem) count++;
			if (rightBottomItem) count++;
			result[i].push(count);
			count = 0;
		}
	}
	return result;
}

module.exports = {
  minesweeper
};
