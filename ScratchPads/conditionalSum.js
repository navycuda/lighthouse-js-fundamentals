const conditionalSum = function(values, condition) {
  // Your code here
  if (typeof values === 'object')
    if (values.length > 0){
      let result = 0;
      for (let v = 0; v < values.length; v++){
        if (condition === 'even'){
          result += values[v] % 2 === 0 ? values[v] : 0;
        } else if (condition === 'odd'){
          result += values[v] % 2 === 1 ? values[v] : 0;
        }
      }
      return result;
    }
  return 0;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));