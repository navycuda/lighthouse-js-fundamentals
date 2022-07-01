const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
const l = ingredients.length;

console.log('\nwhile, forward');
while (i < l)
  console.log(ingredients[i++]);

// Write a for loop that prints out the contents of ingredients:
console.log('\nfor, forward');
for (i = 0; i < l; i++)
  console.log(ingredients[i]);

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nfor, reverse');
for (i = l - 1; i >= 0; i--)
  console.log(ingredients[i]);