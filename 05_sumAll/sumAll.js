const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let array = [firstNum, secondNum].sort();
    const startNumber = array[0];
    const finishNumber = array[1];
    let i = startNumber;
    
    if (typeof(firstNum) !== 'number' || typeof(secondNum) !== 'number' || startNumber < 0 || finishNumber < 0) {
        return 'ERROR';
    } else {
        while (i < finishNumber - 1) {
            i++;
            array.splice(1, 0, i);
            array.sort((a, b) => a - b);
        }
        function sumArray(array) {
            for (i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum;
        }
        sumArray(array);
    }
    return sum;
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
