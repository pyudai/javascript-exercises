const ftoc = function (degree) {
  return Math.round((((degree - 32) * 5) / 9) * 10) / 10;
};

const ctof = function (degree) {
  return Math.round(((degree * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
