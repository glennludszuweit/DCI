//prime number detector
function primeNumber(number) {
  for ( let i = 2; i < number; i++ ) {
    if ( number % i === 0  || !Number(number) ) {
      return false;
    } else {
      return true;
    }
  }
  return number > 1;
}
primeNumber(2);

//***********************************************************************

//sort() & reverse()
let numArray = [ 33, 54, 23, -34, 200, 783 ];

//SORT
function sortArray( numbers ) {
  return numbers.sort((a, b) => {
    return a - b;
  });
}
sortArray( numArray );

//REVERSE
function reverseArray(numbers) {
  return numbers.reverse();
}
reverseArray(numArray);