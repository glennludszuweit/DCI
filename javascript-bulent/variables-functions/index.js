//No function()
var myFirstVar = "I'm first variable";
var mySecondVar = "I'm second variable";
var theVar = myFirstVar + ' and ' + mySecondVar;
console.log(theVar);

//with function()
var myFirstVar = "I'm first variable";
var mySecondVar = "I'm second variable";
function getTheVar(theVar) {
  console.log(theVar);
}
getTheVar(myFirstVar + ' and ' + mySecondVar);

// ==========================================

var myFirstNum = 123;

var myNum = 12345;
console.log(myNum);

myNum = myFirstNum;
console.log(myNum);
console.log(myFirstNum);

myFirstNum = '123';
console.log(myNum);
console.log(typeof myFirstNum);

myFirstNum = myFirstNum + 5;
myFirstNum += 5;
myFirstNum += 's';
myNum = myNum + 5;
myNum += 5;
myNum += 'b';

console.log(myFirstNum);
console.log(myNum);

function consoleLogger(text) {
  console.log(text);
}
consoleLogger('Hallo');
