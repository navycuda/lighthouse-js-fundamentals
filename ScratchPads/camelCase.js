const camelCase = function(input) {
  // Your code here
  let capitalize = false;
  let output = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === ' ')
      capitalize = true;
    else if (capitalize)
    {
      output += input[i].toUpperCase();
      capitalize = false;
    }
    else
      output += input[i];
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));