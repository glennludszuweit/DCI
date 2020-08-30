//without using class
function NewUserCreator(name, score) {
  this.name = name;
  this.score = score;
}
NewUserCreator.prototype.increment = function () {
  let add1 = () => {
    this.score++;
  };
  add1();
};

NewUserCreator.prototype.login = function () {
  console.log('Logged in!');
};

const user1 = new NewUserCreator('Tony', 25);
user1.login();
user1.increment();

console.log(user1);
console.log(user1.score);

//transform using Class
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log('Logged in!');
  }
}

const user2 = new UserCreator('Gregg', 12);
user2.login();
user2.increment();

console.log(user2);
