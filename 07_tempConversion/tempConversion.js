const convertToCelsius = function(temp) {
  // f - 32 / 1.8
  let result = (temp - 32) / 1.8;
  result = Number(result.toFixed(1));
  return result;
};

const convertToFahrenheit = function(temp) {
  //c * 1.8 + 32
  let result = temp * 1.8 + 32;
  result = Number(result.toFixed(1));
  return result;
};

convertToCelsius(-100)
convertToFahrenheit(73.2)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
