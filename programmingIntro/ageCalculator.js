const ageCalculator = function(name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`;
};

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Ferdinand", 2003, 2015));
console.log(ageCalculator("Ferdinand", 2015, 2015));