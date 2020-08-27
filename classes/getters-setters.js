class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfReqForArea = 0;
  }

  get area() {
    this.numOfReqForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

const firstSqr = new Square(4);
firstSqr.area = 25;
console.log(firstSqr.width);
console.log(firstSqr.height);

console.log(firstSqr.area);
console.log(firstSqr.area);
console.log(firstSqr.area);
console.log(firstSqr.area);

console.log(firstSqr.numOfReqForArea);
