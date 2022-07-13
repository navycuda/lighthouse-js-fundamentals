const generateBoard = function(whiteQueen, blackQueen){
  let board = []

  for (let r = 0; r < 8; r++){
    board.push([]);
    for (let c = 0; c < 8; c++){
      board[r].push(coordsMatch([r,c],[whiteQueen, blackQueen]) ? 1 : 0);
    }
  }
  return board;
}
const coordsMatch = function (coords, players) {
  for (let p = 0; p < players.length; p++){
    const x = coords[0];
    const y = coords[1];
    const pX = players[p][0];
    const pY = players[p][1];
    if (x === pX && y === pY)
      return true;
  }
  return false;
}
const queenThreat = function(board) {
  // Setup the players
  let p = [];
  // iterate over the board and establish player position
  for (let y = 0; y < board.length; y++)
    for (let x = 0; x < board[y].length; x++)
      if (board[y][x] === 1)
        p.push([y,x]);
  // abbreviate the coordinates
  let y1 = p[0][0];
  let y2 = p[1][0];
  let x1 = p[0][1];
  let x2 = p[1][1];
  // see if there is a check
  if (y1 === y2 || x1 === x2)
    return true;
  else if ((x1 - x2) + (y1 - y2) === 0)
    return true;
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
