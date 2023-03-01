const reverseString = function(string) {
    let stringArr = string.split('').reverse();
    string = stringArr.join('');
    return string;
};

reverseString('')

// Do not edit below this line
module.exports = reverseString;
