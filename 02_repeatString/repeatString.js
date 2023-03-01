let string;
let num;

const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) {
        return 'ERROR'
    } else {
        for (i = 0; i < num; i++) {
            newString += string;
        }
    }
    return newString;
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
