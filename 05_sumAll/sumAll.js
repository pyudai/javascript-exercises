const sumAll = function (start, end) {
  let result = 0;

  if (start < 0 || end < 0 || typeof end !== 'number') return "ERROR";

  for (
    let i = start < end ? start : end;
    start < end ? i <= end : i <= start;
    i++
  ) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
