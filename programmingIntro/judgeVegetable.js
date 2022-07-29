const judgeVegetable = function(veggies, judgedOn) {
  return veggies.reduce((acc, cur) =>{
    if (judgedOn === 'redness') {
      return acc = acc.redness > cur.redness ? acc : cur;
    } else {
      return acc = acc.plumpness > cur.plumpness ? acc : cur;
    }
  }, {}).submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Jeanie Pie',
    redness: 11,
    plumpness: 1
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));