const chooseStations = function(stations) {
  let result = [];
  for (let s of stations)
    if (s[1] >= 20 && (s[2] === 'school' || s[2] === 'community centre'))
      result.push(s[0]);
  return result;
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);