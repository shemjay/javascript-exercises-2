const convertToCelsius = function(far) {
  let cel = 0
  cel = (far - 32) * (5/9)
  let result = Math.round(cel * 10) / 10
  return result
};

const convertToFahrenheit = function(cel) {
  let far = 0
  far = (cel * 9/5) + 32
  let result = Math.round(far * 10) / 10
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
