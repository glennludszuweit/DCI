//Add items in an array
let arr = [1, 8, 98];

const reduceSum = (arr) => {
  let result = arr.reduce((a, b) => {
    return (a = a + b);
  }, 0);
  console.log(result);
};
reduceSum(arr);

const sumFunc = (arr) => {
  let result = 0;
  arr.forEach((num) => {
    result = result + num;
  });
  console.log(result);
};

sumFunc(arr);

let forSum = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  console.log(result);
};
forSum(arr);
