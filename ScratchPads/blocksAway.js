const blocksAway = function(directions) {
  // Put your solution here
  const compass = {
    set: function(direction, distance) {
      const compassPoints = "nesw";
      let index = compassPoints.indexOf(this.pointing);
      if (direction === 'right')
        index = circularNumber(index, 1, 0, 3);
      else
        index = circularNumber(index,-1, 0, 3);
      this.pointing = compassPoints[index];
      switch (this.pointing) {
      case 'n':
        this.north += distance;
        break;
      case 'e':
        this.east += distance;
        break;
      case 's':
        this.north -= distance;
        break;
      case 'w':
        this.east -= distance;
        break;
      }
    },
    pointing: 'n',
    east: 0,
    north: 0
  };
  for (let i = 0; i < directions.length; i += 2) {
    compass.set(directions[i],directions[i + 1]);
  }
  return {
    east: compass.east,
    north: compass.north
  };
};
const circularNumber = function(num, step, min, max) {
  num += step;
  while (num > max || num < min) {
    num += num > max ? -(max + 1) : max + 1;
  }
  return num;
};


// NOTE:  This excersise has a logical flaw in it.  The driver is only given the option to
//        turn right or left.  If the driver turns to the right, the direction of travel is
//        to the east.  If the driver turns to the left, logically, the direction of travel
//        must be to the west.  It appears, in order to satisfy the expected output, the first
//        turn may only be to the right, otherwise to treat the left as through it was a
//        directive to join north bound traffic.  I am unable to reconcile this logical error
//        so I will present the code in its correct formatting which will not honor the expected
//        results.
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));