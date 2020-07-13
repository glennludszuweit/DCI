var a = 1;
console.log(a);

function test(b) {
  var a = 2 + b;
  console.log(a);
}

test();
test(25);
console.log(a);

var global = 1;
console.log(global);

function test2(newNum) {
  var local = 2 * newNum;
  console.log(local);
}

test2(22);
test2(23);

console.log(global);

