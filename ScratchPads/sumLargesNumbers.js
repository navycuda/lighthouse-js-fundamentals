const sumLargestNumbers = function(data) {
  // Put your solution here
  let max = 0;
  let almostMax = 0;
  for (let n = 0; n < data.length; n++){
    let num = data[n];
    if (num > max)
    {
      almostMax = max;
      max = num;
    }
    else if (num > almostMax)
      almostMax = num
  }
  return max + almostMax;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));