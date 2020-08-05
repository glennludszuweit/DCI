console.log('***********************function()***********************');
let counter = 0;
let numVal = 3;
function oldAddOne(theParams, secondParams) {
  return (theParams + 1) + (secondParams + 2);
}
oldAddOne(counter, numVal);

function addOne( theParameter ) {
  return theParameter + 1;
}
console.log(addOne(2));
let doAddOne = addOne;
console.log(doAddOne(2))

let multiplyByTwo = (number) => {
  let result = number * 2;
  return result;
}
multiplyByTwo(37)

let squareRoot = (sqrtParam) => {
  let result = Math.sqrt(sqrtParam)
  return result;
}
squareRoot(25);

let secondPowerOfSum = (num1, num2) => {
  let result = (num1 + num2) ** 2;
  return result;
}
secondPowerOfSum(13, 15);

let addQuestionMarkToStr = (frageStr) => {
  let result = frageStr + '?';
  return result;
}
addQuestionMarkToStr('What');

let volume = (side) => {
  let result = Math.pow(side, 3); //side ** 3;
  return result;
}
volume(10);

let negativeNum = (number) => {
  let result =  Math.abs(number) * -1;
  return result;
}
negativeNum(65);

console.log('***********************.reduce()***********************');
let classGrades = [2, 1, 3, 4, 4, 6, 1, 3, 5];
let totalGrade = classGrades.reduce((gradeTotal, value) => {
  return gradeTotal + value
}, 0);
console.log(totalGrade / classGrades.length)

let newNames = ['John', 'Jane', 'Sam', 'Bob', 'Alice'];
let newMessage = newNames.reduce((greetingMessage, name) => {
  return greetingMessage + name + ', ';
}, 'Welcome ')
console.log(newMessage + 'to DCI');

let reduceStrArray = ['Glenn', 'Tony'];
let reduceResultStr = reduceStrArray.reduce((result, value) => {
  if (value.length > result.length) {
    result = value;
  }
  return result
},  '')
console.log(reduceResultStr);

console.log('***********************.forEach()***********************');
let classNames = ['Daniel', 'Danylo', 'Glenn', 'Basti'];
classNames.forEach((name) => {
  console.log(`Hi ${name}`);
})

let myNums = [2, 5, 6, 7];
let sum = 0;
myNums.forEach((average) => {
  sum = sum + average;
})
console.log(sum / myNums.length)

let allNames = ['John', 'Jane', 'Sam', 'Bob', 'Alice'];
let message = 'Welcome ';
allNames.forEach((name) => {
  message = message + name + ', ';
})
console.log(message + 'to DCI');

let foreachStrArray = ['Glenn', 'Tony'];
let foreachResult = '';
foreachStrArray.forEach((longest) => {
  if (longest.length > foreachResult.length) {
    foreachResult = longest;
  }
});
console.log(foreachResult)

let forEachNums = [1,2,3,4,5];
let forEachLowestNum = Infinity;
forEachNums.forEach((number) => {
  if (number < forEachLowestNum) {
    forEachLowestNum = number
  }
})
console.log(forEachLowestNum)

console.log('***********************.map()***********************');
let allPrices = [21.3, 55.45, 34.5, 10.02, 9.99];
let newPrices = allPrices.map((prices) => {
  return Math.round((prices / 1.19) * 1.16) - .05;
})
console.log(newPrices)

let allGrades = [2,3,4,6,4,5,3,2,3];
allGrades.map((grade) => {
  return grade + 1;
  console.log(grade)
})




















