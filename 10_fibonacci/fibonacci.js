const fibonacci = function (index) {
	if (typeof index === "string") {
		index = Number(index);
	}

	if (index < 0) return "OOPS";

	const arr = [];
	let a = 0;
	let b = 1;

	arr.push(a);

	for (i = 1; i <= index; i++) {
		arr.push(b);
		let c = a + b;
		a = b;
		b = c;
	}
	return arr[index];
};

fibonacci(6);

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, ...

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

// Do not edit below this line
module.exports = fibonacci;
