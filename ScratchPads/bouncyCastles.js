// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const PiRPow = function(radius, power) {
  let result = 1;
  for (let p = 0; p < power; p++)
    result *= radius;
  return PI * result;
}

const sphereVolume = function (radius) {
  // Code here!
  return (4/3) * PiRPow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (1/3) * PiRPow(radius, 2) * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let result = 0;
  for (let s = 0; s < solids.length; s++){
    const solid = solids[s];
    if (solid.type === 'prism')
      result += prismVolume(solid.heigth,solid.width,solid.depth);
    else if (solid.type === 'sphere')
      result += sphereVolume(solid.radius);
    else if (solid.type === 'cone')
      result += coneVolume(solid.radius,solid.height);
  }
  return result;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);