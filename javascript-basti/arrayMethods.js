let counter = 0;
let numVal = 3;

function addOne(theParams, secondParams) {
  return (theParams + 1) + (secondParams + 2);
}
addOne(counter, numVal);

///*****************************************.reduce()*********
let classGrades = [2, 1, 3, 4, 4, 6, 1, 3, 5];
let totalGrade = classGrades.reduce(addGrades, 0);
 
function addGrades(gradeTotal, value) {
  return gradeTotal + value
}

console.log(totalGrade / classGrades.length)

let newNames = ['John', 'Jane', 'Sam', 'Bob', 'Alice'];
let newMessage = newNames.reduce((greetingMessage, name) => {
  return greetingMessage + name + ', ';
}, 'Welcome ')
console.log(newMessage + 'to DCI');

///*****************************************.forEach()*********
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
  message = message + name + ' ';
})
console.log(message + ' to DCI');

///*****************************************.map()*********
let allPrices = [21.3, 55.45, 34.5, 10.02, 9.99];
let newPrices = allPrices.map((prices) => {
  return Math.ceil((prices / 1.19) * 1.16) - .05;
})
console.log(newPrices)

let allGrades = [2,3,4,6,4,5,3,2,3];
allGrades.map((grade) => {
  return grade + 1;
  console.log(grade)
})




















