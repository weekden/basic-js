const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}
	latinAlphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	encrypt(str, key) {
		if (!str || !key) throw new Error('Incorrect arguments!');
		str = str.toUpperCase();
		key = key.toUpperCase();


		let result = '';
		let indexKey = 0;

		for (let i = 0; i < str.length; i++) {
			if (indexKey >= key.length) indexKey = 0;
			if (this.latinAlphabet.includes(str[i])) {
				const strIndexAlph = this.latinAlphabet.indexOf(str[i]);
				const keyIndexAlph = this.latinAlphabet.indexOf(key[indexKey]);

				const resultIndex = (strIndexAlph + keyIndexAlph) % this.latinAlphabet.length;
				result += this.latinAlphabet[resultIndex];
				indexKey++;
			} else {
				result += str[i];
			}
		}

		return this.isDirect ? result : result.split('').reverse().join('');
	}
	decrypt(str, key) {
		if (!str || !key) throw new Error('Incorrect arguments!');
		str = str.toUpperCase();
		key = key.toUpperCase();

		let result = '';
		let indexKey = 0;

		for (let i = 0; i < str.length; i++) {
			if (indexKey >= key.length) indexKey = 0;
			if (this.latinAlphabet.includes(str[i])) {
				const strIndexAlph = this.latinAlphabet.indexOf(str[i]);
				const keyIndexAlph = this.latinAlphabet.indexOf(key[indexKey]);

				let newIndex = strIndexAlph - keyIndexAlph;
        if(newIndex < 0) newIndex += this.latinAlphabet.length;
        if(newIndex >= this.latinAlphabet.length) newIndex -= this.latinAlphabet.length;
				result += this.latinAlphabet[newIndex];
				indexKey++;
			} else {
				result += str[i];
			}
		}

		return this.isDirect ? result : result.split('').reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine,
};
