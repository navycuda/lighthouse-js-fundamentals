const costPerFoot = function (ft) {
  return (20 / 8) * ft;
}
const costPerYard = function (y) {
  // Round up to the nearest full yard
  y = Math.ceil(y);
  return y * 40;
}
const gardenSegment = function (corners, wallsX, wallsY, lifts, ftX, ftY) {
  const costCorners = corners * 7.61;
  const costWallsX = costPerFoot(ftX) * wallsX;
  const costWallsY = costPerFoot(ftY) * wallsY;

  const yards = (ftX * ftY * (lifts * 0.5)) / 27;

  let cost = (costCorners + costWallsX + costWallsY) * lifts;
  return [cost,yards];
}

let garden = 
[
  gardenSegment(5,2,2,2,8,4),   // A
  gardenSegment(4,2,1,2,8,4),   // B
  gardenSegment(0,2,0,2,10,4),  // C
  gardenSegment(4,2,1,2,8,4),   // D
  gardenSegment(5,2,2,2,8,4),   // E
  gardenSegment(2,2,1,2,8,4),   // F
  gardenSegment(0,1,0,2,10,4),  // G
  gardenSegment(4,2,1,2,8,4),   // H
  gardenSegment(2,2,1,2,8,4),   // I
];

let sum = 0;
let volume = 0;
for (let i = 0; i < garden.length; i++) {
  sum += garden[i][0];
  volume += garden[i][1];
}

let totalWithTax = sum + costPerYard(volume);
console.log(`$${sum.toLocaleString("en-us")} in bricks and boards.`);
console.log(`${volume.toLocaleString("en-us")}yard^3 is $${costPerYard(volume).toLocaleString("en-us")}`);
console.log(`Total: $${totalWithTax.toLocaleString("en-us")}`);
