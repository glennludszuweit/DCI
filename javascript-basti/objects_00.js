//Anounymous Objects
let obj = {
  firstValue: 'Hello',
  secondValue: {
    secondOne: 'Hi there',
    secondTwo: 'Hello there'
  },
  thirdValue: () => {
    return 'How are you';
  },
  fourthValue: [
    1, 2, 3, 4, 5
  ]
}
obj.randomValue1 = 'I am OKAY';

console.log(obj)

//assign Object property to an object
let obj2 = Object.assign({}, obj);
obj2.randomValue2 = 'We are not okay';
delete obj2.randomValue2;
console.log(obj2)

//Class Objects
class ValueHolder {
  constructor( theNewValue, theSecondNewValue, theThirdNewValue ) {
    this.value = theNewValue;
    this.secondValue = theSecondNewValue;
    this.thirdValue = theThirdNewValue;
  }
  consoleLog () {
    console.log(this.value);
    console.log(this.secondValue);
    console.log(this.thirdValue);
  }
}

let Values = new ValueHolder('Hello', 'From', 'Javascript');
Values.consoleLog();
console.log(Values);

let Values2 = new ValueHolder('Hello', 'There', 'Dino');
Values2.consoleLog()
console.log(Values2);














































