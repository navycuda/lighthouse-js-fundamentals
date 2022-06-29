/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE
var tS  = [shirtWidth,shirtLength,shirtSleeve];
var sizes = [
  [18,28,8.13,"S"],
  [20,29,8.38,"M"],
  [22,30,8.63,"L"],
  [24,31,8.88,"XL"],
  [26,33,9.63,"2XL"],
  [28,34,10.13,"3XL"]
];
var testValues = [
  [18, 28, 8.13, 'S'],
  [19.99, 28.99, 8.379, 'S'],
  [20, 29, 8.38, 'M'],
  [22, 30, 8.63, 'L'],
  [24, 31, 8.88, 'XL'],
  [26, 33, 9.63, '2XL'],
  [27.99, 33.99, 10.129, '2XL'],
  [28, 34, 10.13, '3XL'],
  [18, 29, 8.47, 'NA'],
];

function checkSize (input) {
  var size = "NA";
  for (let i = 0; i < sizes.length; i++) {
    if (i !== sizes.length - 1){
      if (input[0] >= sizes[i][0] && input[1] >= sizes[i][1] && input[2] >= sizes[i][2]){
        if (input[0] < sizes[i+1][0] && input[1] < sizes[i+1][1] && input[2] < sizes[i+1][2]){
          size = sizes[i][3];
        }
      }
    }
    else{
      if (input[0] >= sizes[i][0] && input[1] >= sizes[i][1] && input[2] >= sizes[i][2])
        size = sizes[i][3];
    }
  }
  return size;
}

console.log(checkSize(tS));

for (let i = 0; i < testValues.length; i++) {
  var loopTee = [testValues[i][0],testValues[i][1],testValues[i][2]];
  var loopSize = testValues[i][3];
  console.log(checkSize(loopTee) === loopSize);  
}