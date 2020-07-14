//EXERCISE 1 && 2
let x = 25;
let y = 99;

let xGreater50 = x >= 50;
let xLess50 = x <= 99;

let yGreater50 = x >= 50;
let yLess50 = x <= 99;

if (xGreater50 && xLess50) {
    console.log('true');
} else if (yGreater50 && yLess50) {
    console.log('true');
} else {
  console.log('false');
}

//EXERCISE 3
let a = 5;
let b = 10;
let c = 15;

if (a >= 15) {
    console.log('a');
} else if (b >= 15) {
    console.log('b');
} else if (c >= 15) {
    console.log('c');
} else {
    console.log('all numbers are smaller than 15');
}

//EXERCISE 4
let num1 = 25;
let num2 = 35;
let sum = num1 + num2;
if (sum >= 50 && sum < 80) {
  console.log('65');
} else {
  console.log('80');
}

//EXERCISE 5
let num3 = 13;
let num4 = 5;
let sum2 = num3 + num4;
let diff2 = num3 - num4;
if ((sum2 === 8) || (diff2 === 8)) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCISE 6
let num5 = 12;
let num6 = 13;
let sum3 = num5 + num6;
if ((num5 === 15) || (num6 === 15) || (sum3 === 15)) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCISE 7

//EXERCISE 8
let num7 = 19;
let sum4 = num7 + 19;
if (num7 >= 19) {
  console.log('Double the difference');
} else {
  console.log('num7 is less then 19');
}

//EXERCISE 9
let str1 = prompt('enter word');
let str2 = prompt('enter word');
//let str1 = 'Hello';
//let str2 = 'World';
if (str1 == str2) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCISE 10
let num8 = 22;
let num9 = 44;
let prod1 = num8 * 2;
if (prod1 > num8) {
  console.log('true');
} else {
  console.log('false');
}

//EXERCISE 11
let num10 = +prompt('Enter number');
//let num10 = 1;
let sum5 = num10 + 5;
if (sum5 > 99) {
  console.log('Big');
} else if (sum < 10) {
  console.log('Small');
} else {
  console.log('Normal');
}

//EXERCISE 12
let str3 = 'coding';
let addStr = str3+'isgreat'
if (addStr) {
  console.log('That is a fact');
} else {
  console.log('You should code more')
}

//EXERCISE 13
let num1 = +prompt('Enter number');

if (num1 === 12) {
    let num2 = +prompt('Enter second number');
    let sum = num1 + num2;
    if (sum > 12) {
        console.log(12)
    } else {
        console.log('too small :D');
    }
} else {
    console.log('number is smaller than 12');
}

//EXERCISE 14
let num = +prompt('Enter Number');

if (!isNaN(num)) {
    console.log('Number');
} else {
    console.log('String')
}