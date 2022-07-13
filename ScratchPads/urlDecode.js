const urlDecode = function(text) {
  // Put your solution here
  // clear away any of the encoded spaces
  text = removedEncodedSpaces(text);
  // Get the key value pairs
  const keyValuePairs = seperateKeyValuePairs(text);
  // Create the result object
  let result = {}
  // iterate through the pairs
  for (let k = 0; k < keyValuePairs.length; k++)
    result[keyValuePairs[k].key] = keyValuePairs[k].value;
  return result;
};

const keyValuePair = function (text) {
  const delinatorIndex = text.indexOf("=");
  return {
    key: text.slice(0, delinatorIndex),
    value: text.substring(delinatorIndex + 1)
  };
}
const removedEncodedSpaces = function (text){
  if (!text.includes("%20"))
    return text;
  let result = "";
  for (let t = 0; t < text.length-4; t++){
    const sample = text.substring(t, t+3);
    if (sample === '%20'){
      text = text.substring(0, t) + " " + text.substring(t+3)
    }
  }
  return text;
}
const seperateKeyValuePairs = function (text){
  if (!text.includes("&"))
    return [ keyValuePair(text) ];
  let pairs = [];
  const length = countAndSign(text);
  for (let i = 0; i < length; i++){
    const andIndex = text.indexOf("&");
    pairs.push(keyValuePair(text.substring(0,andIndex)));
    text = text.substring(andIndex+1);
    if (i == length - 1)
      pairs.push(keyValuePair(text));
  }
  return pairs;
}
const countAndSign = function (text) {
  let count = 0;
  for (let i = 0; i < text.length; i++)
    if (text[i] === '&')
      count ++;
  return count;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);