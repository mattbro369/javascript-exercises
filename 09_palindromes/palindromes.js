const palindromes = function (word) {
	const arr = Array.from(word.toLowerCase().replace(/[^a-z]/g, ""));

	const arrReverse = [...arr].reverse();

	return arr.every((char, i) => char === arrReverse[i]);
};

// Do not edit below this line
module.exports = palindromes;
