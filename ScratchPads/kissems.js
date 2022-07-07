const aLovenator = function(name) {
  return {
    Name: name,
    GetKissems: function (lovenator) {
      return `${this.Name} gave a Kissems to the lovenator ${lovenator.Name}`
    }
  }
}

const Bella = aLovenator('Bella');
const Shane = aLovenator('Shane');

console.log(Shane.GetKissems(Bella));