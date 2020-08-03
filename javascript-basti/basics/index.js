// Variables
​
// Purpose 1: Store the result of a function call for later use (const)
//   e.g. const myButton = document.getElementById("#myButton");
​
// Purpose 2: Change something over time
//   e.g. let x = 1; ... ; x = x + 15; ... ; x =+ 21;
​
​
// [keyword] [identifier] [assignment operator] [value] [optional statement termination]
//   let         myLetVar            =              ""                   ;
//   var         // the dinosaur predecessor of let
//   const       // cannot change anymore in one scope
​
// Data Types / Values
​
// Numbers
let myNumber    = 123;
let myFloat     = 123.5;
let myBigNumber = 123e12; // 123 * 10^12 // 123000000000000
​
// String or Text
let myString1 = 'Hello';
let myString2 = "Hello";
let myString3 = `Hello`;
​
// Boolean
let myTrueBool  = true;  // 1, 'true', 'yes'
let myFalseBool = false; // 0, '', null, undefined
​
// Object
let myEmptyObject = {};
let myShallowObject = {
    myFirstValue: 123,
    mySendValue: "hello"
};
​
console.log(myShallowObject.myFirstValue);    // => 123
console.log(myShallowObject['myFirstValue']); // => 123
​
// Array
​
// Using variables you could do something like that:
//   let Input1 = "dasads";
//   let Input2 = "kldaj;ldkj";
// ... dont do this, use arrays
​
let myEmptyArray = [];
let mySimpleArray = [0,'1',2,3,4,5,6,7,8,9];
console.log(mySimpleArray[0]); // => 0
console.log(mySimpleArray[1]); // => '1'
console.log(mySimpleArray[9]); // => 9
​
// let arr = [];
// for (let i = 0; i <= 99; i++){
//     arr[i] = i;
// }
// console.log(arr); // => [0,1,2,3...98,99]
​
// Arithmetics
​
// Basic Math Operations
​
let myResult = 1 + 2 * 3 / 4 ** 5;
​
// To the power of:
//    4 ** 5
// == 4 * 4 * 4 * 4 * 4
// == Math.pow(4,5)
​
Math.abs(-1)    // => 1
Math.round(1.1) // => 1
Math.round(1.5) // => 2
Math.floor(1.5) // => 1
Math.ceil(1.1)  // => 2
Math.max(1,2,3) // => 3 // gives you the biggest number
Math.min(1,2,3) // => 1 // gives you the smallest number
Math.random()   // => 0...1 // 0.12213123
Math.sqrt(9)    // => 3
// To get a random number inbetween  0 and 100
const randomNumber1 = Math.random() * 100; // still contains decimal places
const randomNumber2 = Math.round ( Math.random() * 100 ); // without decimal places
const randomNumber3 = Math.ceil  ( Math.random() * 100 ); // without decimal places, without 0
const randomNumber4 = Math.floor ( Math.random() * 100 ); // without decimal places, without 100
const randomNumber5 = -1 * Math.round ( Math.random() * 100 ); // negative numbers
// -100 ... 0 ... 100 ... 200
//          |             | Math.round ( Math.random() * 200 )
// |              | <<<<<<< - 100
const randomNumber6 = Math.round ( Math.random() * 200 ) - 100; // from -100 to 100
​
// String Operations
const stringA = 'a';
const stringB = 'b';
const joinedString = stringA + stringB; // => 'ab'
​
// Beware!!!!11elf
// With any Math operator except + JavaScript will try to convert a string into a number
//   this has made a lot of programmers very sad, and is a great source of criticism
//   unfortunately we canno change it anymore :D
const stillAStringOperation = 1 + '1' // => '11'
const notAStringOperation   = 1 - '1' // => 0
​
// Comparisons
​
// Strict equality / inequality, USE THIS BY DEFAULT
1 === 1   // true
1 !== 1   // false
​
// Special about the three equal signs:
​
1 === '1' // false
​
// the first value is a number,
// the second one is a string
// THEY ARE NOT STRICLTY EQUAL
​
// Loose equality / inequality
​
1 == 1   // true
1 != 1   // false
​
// Special about loose equality:
​
2 == '2' // true
1 == '2' // false
2 != '2' // false
1 != '2' // true
​
// Javascript converts '2' into the Number 2
//   so in a loose sense, they are equal
​
// Relative comparisons
​
1 < 2 // true  (is smaller than)
2 < 1 // false (is smaller than, but it's not)
2 > 1 // true  (is greater than)
1 > 2 // false (is greater than, but it's not)
​
1 <= 1 // true (is smaller than or equal to)
1 >= 1 // true (is greater than or equal to)
​
// Logical Operators
​
// For the and (&&) operator everything needs to be true
//   if one of the values is false, it's false
const andOperation1 = true  && true          // true
const andOperation2 = true  && false         // false
const andOperation3 = false && false         // false
const andOperation4 = true  && true && false // false
​
// For the or (||) operator at least one value needs to be true
//   if one of the values is true, it's true
const orOperation1 = true  || true          // true
const orOperation2 = true  || false         // true
const orOperation3 = false || false         // false
const orOperation4 = true  || true || false // true
​
// somtimes we need to combine comparisons
var temperature = 34;
var cloudy      = false;
​
if ( temperature > 30 && cloudy === false ){
    console.log('good weather');
}