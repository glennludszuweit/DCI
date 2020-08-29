let arr = ['hello', 'dci', 'friends'];

let foreachResult = (arr) => {
  let theString = '';
  arr.forEach((str) => {
    theString = theString + str + ' ';
  });
  console.log(theString);
};

foreachResult(arr);

let newStr = arr.join(' ');
console.log(newStr);
