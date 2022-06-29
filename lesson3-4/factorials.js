var solution = 0;
for (var f = 12; f > 1; f--)
  solution = (solution ? solution *= f : f);
console.log(solution);