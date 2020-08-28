//encapsulation (object literal)
const user1 = {
  name: 'Sami',
  score: '7',
  increment: () => {
    user1.score++;
  },
};
user1.increment();
console.log(user1.score);

//creation useing dot notaion
const user2 = {};
user2.name = 'Mary';
user2.score = '5';
user2.increment = () => {
  user2.score++;
};
user2.increment();
console.log(user2.score);

//create using Object.create
const user3 = Object.create(null);
user3.name = 'Toni';
user3.score = '12';
user3.increment = () => {
  user3.score++;
};
user3.increment();
console.log(user3.score);

//create using function
const userCreator = (name, score) => {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = () => {
    newUser.score++;
  };
  return newUser;
};
const user4 = userCreator('Will', 30);
user4.increment();
console.log(user4.score);
