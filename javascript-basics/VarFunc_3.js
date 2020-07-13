var alice = 23;

function outer() {
  var alice = 42;
  console.log(alice);

  function inner() {
    console.log(alice);
  }
  inner();
}
console.log(alice);
outer();

