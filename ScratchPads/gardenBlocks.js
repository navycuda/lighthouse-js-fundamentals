// 1/2 mesh 50' x 36 @ $155
const costPerFootMesh = function (ft) {
  return (155 / 50) * ft;
}
const costPerFoot2x2 = function (ft) {
  return (15 / 8) * ft;
}
const costPerFoot2x6 = function (ft) {
  return (20 / 8) * ft;
}
const costYards = function (y) {
  return y * 55;
}
const costCorners = function (c) {
  return c * 7.61;
};
const costTwoBySix = function (xW, yW, xFt, yFt) {
  return costPerFoot2x6((xW * xFt) + (yW * yFt));
}
const getFenceDetails = function (fencing, ftX, ftY) {
  // maximum distance between fence posts
  const maxGap = 4;
  // setup count for number of sides getting
  let y = 0;
  let x = 0;
  for (let i = 0; i < fencing.length; i++)
    {
      x += fencing[i] === 'x' ? 1 : 0;
      y += fencing[i] === 'y' ? 1 : 0;
    }
  
  const xPosts = x? x * (ftX % maxGap === 0 ? ftX / maxGap + 1 : Math.ceil(ftX / maxGap + 1)) : 0;
  const yPosts = y? y * (ftY % maxGap === 0 ? ftY / maxGap + 1 : Math.ceil(ftY / maxGap + 1)) : 0;

  const posts = xPosts + yPosts;
  const lineal = (x * ftX) + (y * ftY) + (x+y);

  return { 
    // Gets number of fence posts
    FencePosts: posts,
    // Gets cost of fence posts, (*4 for height of post in ft)
    FencePostCost: costPerFoot2x2(posts * 4),
    // Gets the lineal feet and adds one foot per fence segment for breathing room
    LinealFeetMesh: lineal,
    // Gets the cost of the mesh
    MeshCost: costPerFootMesh(lineal),
    // Gets the fence total
    GetFenceTotal: function() {
      return this.FencePostCost + this.MeshCost;
    }
  };
}
// Format for fence 
//      0,1 x  1,1
//       -------
//       |     | y
//       -------
//      0,0    0,1
//       
//      xxyy  
//            Garden Arrangement
//       
//            X---------------X       X-------X      
//            |       A       |       |   B   | 
//            |               |       |       |  
//            X-------X-------X       |       |  
//            G   | G |   X-------X   |       |   
//            R   |   |   |   I   |   |       |      
//            E   |   |   |       |   |       |  
//            E   |   |   |       |   |       |  
//            N H |   |   |       |   |       |  
//              O |   |   |       |   X       X 
//              U |   |   |       |   |   C   |        
//              S |   |   X-------X   |       |  
//              E |   |   |   H   |   |       |      
//            X-------X   |       |   |       |        
//            |   F   |   |       |   |       |        
//            |       |   |       |   |       |        
//            |       |   |       |   X       X        
//            |       |   |       |   |   D   |        
//            |       |   |       |   |       |        
//            |       |   X-------X   |       |        
//            X-------X-------X       |       |         
//            |       E       |       |       |         
//            |               |       |       |         
//            X---------------X       X-------X         
const gardenSegment = function(corners, wallsX, wallsY, lifts, ftX, ftY, fencing) {
  return {
    Corners: corners, 
    LongWalls: wallsX,
    ShortWalls: wallsY,
    LiftsHigh: lifts,
    WallFtX: ftX,
    WallFtY: ftY,
    CubicYards: (ftX * ftY * (lifts * 0.5)) / 27,
    CornerCost: lifts * costCorners(corners),
    TwoBySix_Cost: lifts * costTwoBySix(wallsX, wallsY, ftX, ftY),
    SoilCost: costYards((ftX * ftY * (lifts * 0.5)) / 27),
    FenceDetails: getFenceDetails(fencing, ftX, ftY),
    GetTotal: function() {
      return this.CornerCost + this.TwoBySix_Cost + this.SoilCost + this.FenceDetails.GetFenceTotal();
    }
  }
}
const getTotalOf = function(garden, item){
  return garden.reduce((acc, cur) => {
    if (item === 'pcsPosts'){
      acc += cur.FenceDetails.FencePosts;
    } else if (item === 'meshLineal'){
      acc += cur.FenceDetails.LinealFeetMesh;
    } else if (item === 'costLumber'){
      acc += cur.TwoBySix_Cost;
    } else if (item === 'costPosts'){
      acc += cur.FenceDetails.FencePostCost;
    }else if (item === 'costMesh'){
      acc += cur.FenceDetails.MeshCost;
    } else if (item === 'total'){
      acc += cur.GetTotal(); 
    } else if (item === 'pcsBricks'){
      acc += cur.Corners;
    } else if (item === 'costBricks'){
      acc += cur.CornerCost;
    } else if (item === 'yardsSoil'){
      acc += cur.CubicYards;
    } else if (item === 'costYards'){
      acc += cur.SoilCost;
    }
    return acc;
  }, 0);
}

const garden = 
[
  gardenSegment(5,2,2,2,8,4,'yx'),   // A
  gardenSegment(4,2,1,2,8,4,'yx'),   // B
  gardenSegment(0,2,0,2,10,4,'x'),  // C
  gardenSegment(4,2,1,2,8,4,'xy'),   // D
  gardenSegment(5,2,2,2,8,4,'xy'),   // E
  gardenSegment(2,2,1,2,8,4,'x'),   // F
  gardenSegment(0,1,0,2,10,2,''),  // G
  gardenSegment(4,2,1,2,8,4,''),   // H
  gardenSegment(2,2,1,2,8,4,''),   // I
];

for (let g = 0; g < garden.length; g++) {
  console.log(`$${garden[g].GetTotal().toLocaleString('en-us')}`)
}

console.log(`Total Bricks Needed     : ${getTotalOf(garden, 'pcsBricks')}`);
console.log(`Total Fence Posts Needed: ${getTotalOf(garden, 'pcsPosts')}`);
console.log(`Total Lineal Mesh Needed: ${getTotalOf(garden, 'meshLineal')} ft.`);
console.log(`Total Yards of Soil     : ${getTotalOf(garden, 'yardsSoil').toLocaleString('en-us')}`);
console.log(`Total Cost of Bricks    : $${getTotalOf(garden, 'costBricks').toLocaleString('en-us')}`);
console.log(`Total Cost of Lumber    : $${getTotalOf(garden, 'costLumber').toLocaleString('en-us')}`);
console.log(`Total Cost of Posts     : $${getTotalOf(garden, 'costPosts').toLocaleString('en-us')}`);
console.log(`Total Cost of Mesh      : $${getTotalOf(garden, 'costMesh').toLocaleString('en-us')}`);
console.log(`Total Cost of Soil      : $${getTotalOf(garden, 'costYards').toLocaleString('en-us')}`);
console.log(`Total                   : $${getTotalOf(garden, 'total').toLocaleString('en-us')}`);