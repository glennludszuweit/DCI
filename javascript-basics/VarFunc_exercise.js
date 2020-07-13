//Function and Scope Exercise
var bob = 4;
console.log(bob);

function addAlice() {
  var alice = 5;
  console.log(alice + bob);
  bob = 42;
}

addAlice();
console.log(bob);

