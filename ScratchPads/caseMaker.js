const makeCase = function(input, _case) {
  // Put your solution here
  switch (_case){
    case "camel":
      return toCamel(input);
    case "pascal":
      return toPascal(input);
    case "snake":
      return toSnake(input);
    case "kebab":
      return toKebab(input);
    case "title":
      return toTitle(input);
    case "vowel":
      return toVowel(input);
    case "consonant":
      return toVowel(input, true);
  }
  if (typeof(_case) === 'object')
    return toTwoCases(input, _case);
}
const toCamel = function (input){
  let capitalize = false;
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (capitalize && input[i] != ' '){
      result += input[i].toUpperCase();
      capitalize = false;
    }
    else if (input[i] === ' ')
      capitalize = true;
    else 
      result += input[i];
  }
  return result;
}
const toPascal = function (input){
  return toCamel(input[0].toUpperCase() + input.substring(1))
}
const toSnake = function (input){
  return replaceAll(input, ' ', '_');
}
const toKebab = function (input){
  return replaceAll(input, ' ', '-');
}
const toTitle = function (input){
  let capitalize = true;
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (capitalize && input[i] != ' '){
      result += input[i].toUpperCase();
      capitalize = false;
    } else if (input[i] == ' '){
      result += input[i];
      capitalize = true;
    } else{
      result += input[i];
    }
  }
  return result;
}
const toVowel = function (input, invert = false){
  const vowels = "aeiou";
  let result = "";
  let capitalize = invert ? true : false;

  for (let i = 0; i < input.length; i++){
    // Check for any vowels.
    for (let v = 0; v < vowels.length; v++)
      if (input[i] === vowels[v])
        capitalize = invert ? false : true; 
    if (capitalize){
      result += input[i].toUpperCase();
      capitalize = invert ? true : false;
    } else {
      result += input[i].toLowerCase();
      capitalize = invert ? true : false;
    }
  }
  return result;
}
const toTwoCases = function (input, _case){
  let result = makeCase(input, _case[1]);
  if (_case[0] === "upper")
    result = result.toUpperCase();
  else if (_case[0] === "lower")
    result = result.toLowerCase();
  return result;
}
const replaceAll = function (input, have, want){
  let result = "";
  for (let i = 0; i < input.length; i++){
    if (input[i] === have)
      result += want;
    else
      result += input[i];
  }
  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));