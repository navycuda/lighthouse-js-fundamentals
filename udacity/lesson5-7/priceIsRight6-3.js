/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for (var i = 0; i < prices.length; i++)
{
  switch (i) {
    case 0:
      prices[i] = i;
      break;
    case 2:
      prices[i] = i;
      break;
    case 6:
      prices[i] = i;
      break;
  }
}
console.log(prices);