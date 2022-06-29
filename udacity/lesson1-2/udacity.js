var expressions = [ 2 + 10 - 19 + 4 -90 + 1,
                    -20 + -19 - (-10) - (-1) + 24,
                    (10/5) * 4 - 20,
                    4096 % 12 ];

console.log(expressions);

var startingNumber = 1 + 1 + 2 + 3 + 5;
var total = 20;

console.log(`blank = ${total - startingNumber}`);

var checkOperators = [ 12 + (-5) * 5,
                       12 - (-5) * 5,
                       12 * (-5) * 5,
                       12 / (-5) * 5];

console.log(checkOperators);

var checkMoreOperators = [  3 * 4 * 5,
                            3 * 4 / 5,
                            3 * 4 + 5,
                            3 * 4 - 5,
                            3 * 4 % 5];

console.log(checkMoreOperators);

var checkingColorsAreEqual = [
  "green" == "blue",
  "green" == "green",
  "green" == "Green",
  "Green" == "green",
  "green" > "blue",
  "green" > "green",
  "green" > "Green",
  "Green" > "green"
];

console.log(checkingColorsAreEqual);

console.log ("Hello" % 10);

var checkExplicitExpressions = [
  "3" > 1,
  3 != "3",
  true >= 0,
  1 !== false,
  "false" === 0,
  3 === 3
];

console.log(checkExplicitExpressions);

var musicians = 1;

if (musicians <= 0)
  console.log("not a group");
else if (musicians === 1)
  console.log("solo");
else if (musicians === 2)
  console.log("duet");
else if (musicians === 3)
  console.log("trio");
else if (musicians === 4)
  console.log("quartet");
else
  console.log("this is a large group");

var logicalExpressions = [
  true || false,
  false && false,
  !true,
  (13 > -7) || (false == 0),
  (10 === "10") && (1 <= 2),
  (3 != 6 % 3) && !(24 > 45) && (!false)
];
console.log(logicalExpressions);

var truthyValues = [
"",
"null",
-5,
0.0,
undefined
];

truthyValues.forEach(e => {
  if (e)
    console.log("truthy");
  else
    console.log("falsy");
});