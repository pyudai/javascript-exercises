const fibonacci = function (order) {
  let numA = (numB = 1);
  if (order<0) return "OOPS";
  if (order === 1 || order === 2) return 1;
  for (let i = 2; i < order; i++) {
    let temp = numA;
    numA = numB;
    numB = numA + temp;
  }
  return numB;
};

// Do not edit below this line
module.exports = fibonacci;
