const range = function(start, end, step) {
  // Check data is valid
  const validEnd = end !== undefined;
  const validStart = start !== undefined && start < end;
  const validStep = step !== undefined && step > 0;

  // If valid, process data
  if (validStart && validEnd && validStep){
    let result = [ start ];
    let value = start;

    // loop through the values and add to array
    while (value < end)
      result.push(value += step);
      
    // push the last value, gave end higher priority over step
    if (value < step)
      result.push(end);
    return result;
  }
  return [];
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0,8,2));