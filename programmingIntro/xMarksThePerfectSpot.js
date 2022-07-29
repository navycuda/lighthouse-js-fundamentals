const finalPosition = function(moves) {
  let x = 0;
  let y = 0;
  for (let m = 0; m < moves.length; m++) {
    let move = moves[m];
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }
  return [x,y];
};
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));