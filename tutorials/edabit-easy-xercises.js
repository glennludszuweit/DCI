//Find the perimeter of a triangle
function findPerimeter(length, width) {
  return (length + width) * 2;
}
findPerimeter(8, 4);

//Less than 100
function lessThan100(a, b) {
  let lessThan100 = a + b;
  if (lessThan100 < 100) {
    return true;
  } else {
    return false;
  }
}
lessThan100(120, 54);

//Return for element in an array[]
function getFirstValue(arr) {
  return arr[0];
}
getFirstValue([1, 2, 3, 4, 5]);

//Reverse an array[]
function reverse(arr) {
  return arr.reverse();
}
reverse([2, 5, 6, 1, 2]);

//Convert hours to seconds
function howManySeconds(hours) {
  return 60 * 60 * hours;
}
howManySeconds(3);

//Calculate the maximum edge of a triangle
function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}
nextEdge(25, 32);

//Return remainder of 2 numbers
function remainder(x, y) {
	return x % y;
}
remainder(2, 7);

//Convert hours and minutes to seconds
function convert(hours, minutes) {
	let convertedHours = (60 * 60) * hours;
	let convertedMinutes = 60 * minutes;
	return convertedHours + convertedMinutes;
}
convert(3, 45);

//Calculate games total points
function footballPoints(wins, draws, losses) {
	let winsResult = wins * 3;
	let drawsResult = draws * 1;
	let lossResult = losses * 0;
	let totalPoints = winsResult + drawsResult + lossResult;
	return totalPoints;
}
footballPoints(5, 2, 4);

//Return even or odd
function isEven(n) {
	return n % 2 == 0;
}
isEven(3)

//Bartenders allowed drinks
function shouldServeDrinks(age, onBreak) {
	return age >= 18 && onBreak === false;
}
shouldServeDrinks(18, false);

//Number divisible by 2
function divisibleBy100(num) {
  return num % 2 === 0;
}
divisibleBy100(111)

//Convert string to number
function stringInt(str) {
	return Number(str)
}
stringInt('200');






















