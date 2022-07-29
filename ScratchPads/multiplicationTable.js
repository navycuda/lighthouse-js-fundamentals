const multiplicationTable = function(maxValue) {
  // Your code here
  let result = "";
  if (maxValue === 1)
    return "1\n";
  for (let r = 1; r <= maxValue; r++)
    for (let c = 1; c <= maxValue; c++) {
      if (c === 1)
        result += c;
      else if (c > 1 && c < maxValue)
        result += ' ' + (c * r);
      else
        result += ' ' + (c * r) + '\n';
    }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));