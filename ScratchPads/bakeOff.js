const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  for (let r = 0; r < recipes.length; r++){
    let bakeryAHasIngredients = checkIngredients(bakeryA, recipes[r].ingredients);
    let bakeryBHasIngredients = checkIngredients(bakeryB, recipes[r].ingredients);
    if (bakeryAHasIngredients && bakeryBHasIngredients)
      return recipes[r].name;
  }
  return "No valid recipes";
}
const checkIngredients = function (bakery, ingredients){
  for (let b = 0; b < bakery.length; b++)
    for (let i = 0; i < ingredients.length; i++)
      if (bakery[b] === ingredients[i])
        return true;
return false;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));