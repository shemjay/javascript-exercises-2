const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(a) {
	let result = 0
  for(let i = 0; i < a.length; i++) {
    result += a[i]
  }
  return result
};

const multiply = function(a) {
  let result = 1
  for(i=0; i<a.length; i++) {
    result *= a[i]
  }
  return result
};

const power = function(a,b) {
	let result = Math.pow(a,b)
  return result
};

const factorial = function(a) {
	let result = 1
	for(i=a; i>=1; i--) {
      result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
