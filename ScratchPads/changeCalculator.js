const calculateChange = function(total, cash) {
  // Your code here
  let correctChange = {
    remainder: cash - total
  };
  // Check the denominations
  getDenominations(correctChange);
  // Remove the remainder
  delete correctChange.remainder;
  // Return the result
  return correctChange;
};

const getDenominations = function(obj) {
  const denominations = [2000,1000,500,200,100,25,10,5,1];
  for (let d = 0; d < denominations.length; d++) {
    let divisor = denominations[d];
    let result = 0;
    if (obj.remainder > divisor) {
      result = Math.floor(obj.remainder / divisor);
      obj.remainder -= (divisor * result);
      // Add correct bill type:
      if (result > 0) {
        switch (divisor) {
        case 2000:
          obj.twentyDollar = result;
          break;
        case 1000:
          obj.tenDollar = result;
          break;
        case 500:
          obj.fiveDollar = result;
          break;
        case 200:
          obj.twoDollar = result;
          break;
        case 100:
          obj.oneDollar = result;
          break;
        case 25:
          obj.quarter = result;
          break;
        case 10:
          obj.dime = result;
          break;
        case 5:
          obj.nickle = result;
          break;
        case 1:
          obj.penny = result;
          break;
        }
      }
    }
  }
};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));