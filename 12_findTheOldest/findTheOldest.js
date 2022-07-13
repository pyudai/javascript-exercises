const findTheOldest = function (people) {
  people.map(
    (p) =>
      (p.age = p.yearOfDeath
        ? p.yearOfDeath - p.yearOfBirth
        : new Date().getFullYear() - p.yearOfBirth)
  );
  return people.reduce((acc, val) => {
    acc = acc.age === undefined || val.age > acc.age ? val : acc;
    return acc;
  }, []);
};

// Do not edit below this line
module.exports = findTheOldest;
