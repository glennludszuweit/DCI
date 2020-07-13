let firstRound = Number(prompt('Enter 1st round time: '));
let secondRound = Number(prompt('Enter 2nd round time: '));
let thirdRound = Number(prompt('Enter 3rd round time: '));
let average;
function calculateAverageRoundTime() {
  average = firstRound + secondRound + thirdRound;
  average = average / 3;
}
calculateAverageRoundTime();
alert('Total average round time: ' + average);

// let name = promt('What is your name?');
// function sayHi() {
//   alert(name);
// }
// sayHi();
