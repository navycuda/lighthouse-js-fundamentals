const squareCode = function(message) {
  // Put your solution here
  // remove spaces
  message = removeSpaces(message);
  // setup dimensions
  const columns = Math.ceil(Math.sqrt(message.length));
  // get the message as an array
  const square = createSquare(message, columns);
  // encode the message
  return encodeMessage(square);
};
const encodeMessage = function (square) {
  let result = "";
  const columns = square[0].length;
  const rows = square.length;

  for (let c = 0; c < columns; c++){
    for (let r = 0; r < rows; r++){
      if (c >= square[r].length)
        continue;
      result += square[r][c];
    }
    if (c != columns - 1)
      result += ' ';
  }
  return result;
}
const createSquare = function (text, columns){
  let squareArray = [];
  let loopValue = "";

  for (let t = 0; t < text.length; t++){
    if (t !== 0 && t % columns === 0){
      squareArray.push(loopValue);
      loopValue = "";
    }
    loopValue += text[t];
    if (t === text.length - 1)
      squareArray.push(loopValue);
  }
  return squareArray
}
const removeSpaces = function (text){
  let result = "";
  for (let i = 0; i < text.length; i++)
    result += text[i] === ' ' ? '' : text[i];
  return result;
}


console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));