const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year % 4);
        console.log(year % 100);
        console.log(year % 400);
        return true;
    } else if (year % 100 === 0 && year % 400 === 0 ) {
        return true;
    } else {
        return false;
    }
};

leapYears(1600);


// Do not edit below this line
module.exports = leapYears;
