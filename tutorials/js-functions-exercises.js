//1. - Write a JavaScript function that takes a string of numbers as argument.
//   - Convert this string to a number.
//   - returns a reverse result.
//example: x = 231423 ==> result: x = 324132
let reverseNumFunc = number => {
  return Number(number.split('').reverse().join(''))
}
reverseNumFunc('231423');

//2. - Write a JavaScript function that checks whether a passed string is     
//      palindrome or not?
//   - A palindrome is word, phrase, or sequence that reads the same backward as 
//      forward, e.g., madam or nurses run
//hint: use condition and sting methods to achieve this.
let palidrome = (word) => {
  let reversed = word
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g,'')
  let unreversed = word
    .split(' ')
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g,'');
  if (reversed == unreversed) {
    console.log(`'${word}' - is a palidrome`);
  } else {
    console.log(`'${word}' - is not a palidrome`);
  }
}
palidrome('Eva, can I see bees in a cave')


//3. - Write a JavaScript function that accepts a string as a parameter.
//   - Converts the first letter of each word of the string in upper case.
//   - Use array and string methods to achieve this.
//example 'enjoy learning javascript' result: 'Enjoy Learning Javascript'.
let capitalizeFirstLetter = (word) => {
  let wordArray = word.split(' ');
  let newFirstLetter = wordArray.map((firstLetter) => {
    let capitalLetter = firstLetter[0].toUpperCase();
    return capitalLetter + firstLetter.slice(1);
  })
  return newFirstLetter.join(' ');
}
capitalizeFirstLetter('enjoy learning javascript')