function UserCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log('Logged in!');
  },
};

const user1 = UserCreator('Phil', 10);
user1.increment();
user1.login();
console.log(user1);

//new & this keyword / function() prototype
function NewUserCreator(name, score) {
  this.name = name;
  this.score = score;
}
NewUserCreator.prototype.increment = function () {
  this.score++;
};

NewUserCreator.prototype.login = function () {
  console.log('Logged in!');
};

const user2 = new NewUserCreator('Tony', 25);
user2.login();
user2.increment();

console.log(user2);
console.log(user2.score);
