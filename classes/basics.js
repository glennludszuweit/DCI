class Rectangle {
  //constructor used to setup objects
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDesc() {
    console.log(`RECTANGLE PROP: ${this.width} X ${this.height} ${this.color}`);
  }
}

const myFirstRectangle = new Rectangle(25, 10, 'blue');
console.log(myFirstRectangle);
console.log(myFirstRectangle.getArea());
console.log(myFirstRectangle.printDesc());

const mySecondRectangle = new Rectangle(10, 30, 'red');
console.log(mySecondRectangle);
console.log(mySecondRectangle.getArea());
console.log(mySecondRectangle.printDesc());
