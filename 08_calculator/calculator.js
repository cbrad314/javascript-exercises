const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(sumArray) {
	return sumArray.reduce((total,element) => total + element,0);
};

const multiply = function(a) {
  return a.reduce((total,element) => total * element)
    
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if (a===0) return a+1;
  else {
    const factors = [];
    for (let index = 0; index < a; index++) {
      factors[index] = index+1;
      
    }
    return factors.reduce((total,element) => total*element);
  }

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
