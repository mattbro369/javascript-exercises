const findTheOldest = function (array) {
	array.forEach((item) => {
		if ("yearOfDeath" in item === false) {
			item.currentYear = new Date().getFullYear();
		}
		item.age =
			item.yearOfDeath - item.yearOfBirth ||
			item.currentYear - item.yearOfBirth;
	});

	const ages = array.map((person) => person.age);
	const index = ages.indexOf(Math.max.apply(Math.max, ages));
	return array[index];
};

const people = [
	{
		name: "Carly",
		yearOfBirth: 1942,
		yearOfDeath: 1970,
	},
	{
		name: "Ray",
		yearOfBirth: 1962,
		yearOfDeath: 2011,
	},
	{
		name: "Jane",
		yearOfBirth: 1912,
		yearOfDeath: 1941,
	},
];

findTheOldest(people);

// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

// Do not edit below this line
module.exports = findTheOldest;
