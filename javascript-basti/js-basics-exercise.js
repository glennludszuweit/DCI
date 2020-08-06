//basics
let hello = 'Hello';
let world = 'World';
let helloWorld = `${hello} ${world}`;
function sayHelloWorld () {
    return helloWorld;
}
sayHelloWorld();

//easy_00
function myFunction() {
    console.log('im a function');
}
myFunction();

//easy_01
function newAddOne(params) {
    let sum = params + 1;
    return sum;
}
newAddOne(5);

//easy_02
function xSum(first, second) {
  let sum = first + second;
  return sum;
}
xSum(5, 7);

//easy_03
function combineString(first, second) {
    let phrase = first + ' ' + second;
    return phrase;
}
combineString('Glenn', 'Ludszuweit');

//easy_04
function getAverage(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  return average;
}
getAverage(5, 7, 9);

//easy_05
function VAT (price) {
    let priceWithVAT = price * 1.16;
    return priceWithVAT;
}
VAT(25);

//medium_00
let stringNums = ['1', '2', '3', '4', '5'];
let convertToNumbers = stringNums.map((numbers) => {
  return Number(numbers);
});
console.log(convertToNumbers);

//medium_01
let myArray = ['hello', 'second', 'item']
function returnSecond(secondItem) {
  console.log(secondItem[1]);
  return secondItem[1];
}
returnSecond(myArray);

//medium_02
var myNames = ['alice','bob','sam'];
var myGreetings = myNames.map((name) => {
  let greetName = 'hi ' + name;
  return greetName;
})
console.log(myGreetings);

//medium_03
let myXNames = ['alice','bob','sam'];
let longestName = myXNames.reduce((result, value) => {
  if (value.length > result.length) {
    result = value;
  }
  return result;
},  '')
console.log(longestName);

//medium_04
var myYNames = ['alice', 'bob', 'sam'];
var longestNameLength = myYNames.reduce((result, value) => {
    if (value.length > result.length) {
      result = value.length;
    }
    return result;
  },  '')
console.log(longestNameLength);

//hard_00
var myNames = ['alice','bob','sam'];
var totalLength = myNames.join('').length;
console.log(totalLength);
