const numberOfVowels = function(data) {
  // Put your solution here
  let sum = 0;
  const vowels = 'aeiou';
  for (let d = 0; d < data.length; d++)
    for (let v = 0; v < vowels.length; v++)
      sum += vowels[v].toLowerCase() === data[d].toLowerCase() ? 1 : 0;
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));