const repeatNumbers = function(data) {
  // Put your solution here
  let result = "";
  for (let d = 0; d < data.length; d++) {
    for (let n = 0; n < data[d][1]; n++)
      result += data[d][0];
    if (data.length > 0 && d < (data.length - 1))
      result += ", ";
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));