
// TODO works with strings
// TODO only removes same type


const removeFromArray = function(array, ...theArgs) {
  let index;
  theArgs.sort((a, b) => a - b)
  
  for (i = 0; i < arguments.length - 1; i++) {
    args = theArgs[i]; 
    
    for (j = array.length - 1; j >= 0; j--) {
      if (isNaN(array[j]) && args === array[j] || args === array[j]) {
        index = array.indexOf(array[j]);
        array.splice(index, 1);
      } 
    }
  }
  return array;
};


removeFromArray([1, 2, 3], "1", 3)
// removeFromArray(["hey", 2, 3, "ho"], "hey", 3)

// Do not edit below this line
module.exports = removeFromArray;
