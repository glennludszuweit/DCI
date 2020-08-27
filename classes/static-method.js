class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidSqr(width, height) {
    return width === height;
  }
}

let sqr1 = new Square(10);

let sqr2 = new Square(5);

console.log(Square.equals(sqr1, sqr2));

console.log(Square.isValidSqr(12, 12));
