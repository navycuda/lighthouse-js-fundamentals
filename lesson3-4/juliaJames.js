/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

while (x <= 20) {
    var result = "";
    // check divisibility
    if (x % 3 === 0)
      result += "Julia";
    if (x % 5 === 0)
      result += "James";
    if (!result)
      result = x;
    // print Julia, James, or JuliaJames
    console.log(result);
    // increment x
    x++;
}