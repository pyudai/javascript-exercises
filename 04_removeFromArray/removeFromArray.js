const removeFromArray = function (arr, ...valueList) {
  for (let i = 0; i < valueList.length; i++)
    arr = arr.filter((x) => x !== valueList[i]);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
