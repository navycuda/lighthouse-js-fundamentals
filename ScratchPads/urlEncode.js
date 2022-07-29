const urlEncode = function(text) {
  // Put your solution here
  let output = "";
  for (let t = 0; t < text.length; t++)
    output += text[t] === ' ' ? '%20' : text[t];
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));