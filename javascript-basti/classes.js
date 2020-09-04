class Stock {
  name = '';
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getUpdatedPrice() {
    let data = fetch(`https://blabla.com/${name}`);
    data
      .then((res) => res.json())
      .then((result) => (this.price = result.currentPrice));
  }

  // static updateAllPrices () {

  // }
}

let apple = new Stock('apple', 99);
let microsoft = new Stock('ms', 0.01);
let spaceX = new Stock('sx', 100000);

console.log(apple);
