const whereCanIPark = function (spots, vehicle) {
  // Code here!
  
  const abbv = "RSM";
  let result = "";
  // use the first letter of the string to identify vehicle
  const v = vehicle[0].toUpperCase();
  // add each of the open spot flags to result
  for (let a = 0; a < 3; a++){
    result += abbv[a];
    if (v === abbv[a])
      break;
  }

  for (let r = 0; r < spots.length; r++)
    for (let c = 0; c < spots[r].length; c++)
      for (let r = 0; r < result.length; r++)
        if (result[r] === spots[r][c])
          return [c,r];
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))