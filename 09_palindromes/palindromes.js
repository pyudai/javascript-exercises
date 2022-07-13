const palindromes = function (str) {

    let test = str.match(/[A-Z]/gi).join("").toLowerCase();
  for (let i = 0; i < test.length / 2; i++)
    if (test[i] !== test[test.length - i - 1]) return false;
  return true;
};

// Do not edit below this line
module.exports = palindromes;
