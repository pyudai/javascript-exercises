const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numList) {
  return numList.reduce((total, num) => total + num, 0);
};

const multiply = function (numList) {
  return numList.reduce((total, num) => total * num, 1);
};

const power = function (x, y) {
  result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
};

const factorial = function (n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
