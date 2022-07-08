const checkAir = function (samples, threshold) {
  // Code here!
  let dirty = 0;
  for (let s = 0; s < samples.length; s++)
    dirty += samples[s] == 'dirty' ? 1 : 0;
  return dirty / samples.length < threshold ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))