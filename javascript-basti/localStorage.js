localStorage.clear(); // Delete everything in local storage
localStorage.setItem(key, value); // saves an instance of key and value in local storage
localStorage.getItem(key); // get an instance in local storage
localStorage.remove(); // remove 1 instance in local storage

JSON.stringify(value); // turns a JSON value into String
JSON.parse(); // turns a JSON back to a JS value

//example
localStorage.setItem('users', JSON.stringify({ name: 'Phil' }));
JSON.parse(localStorage.getItem('users'));

//better example
let json = localStorage.getItem('users');
let users = JSON.parse(json);

//best example
let SET = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

let GET = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

SET('users', [{ name: 'Phil' }]);
GET('users');
