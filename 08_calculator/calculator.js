const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = function (array) {
	return array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
};

const multiply = function (array) {
	return array.reduce(
		(accumulator, currentValue) => accumulator * currentValue
	);
};

const power = (num, power) => num ** power;

const factorial = function (num) {
	if (num === 0) {
		return 1;
	} else {
		const arr = [num];
		for (i = num - 1; i > 0; i--) {
			arr.push(i);
		}
		return arr.reduce(
			(accumulator, currentValue) => accumulator * currentValue
		);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
