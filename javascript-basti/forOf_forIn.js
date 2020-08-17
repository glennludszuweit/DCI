let arr = [
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
];

for (const index in arr) {
  console.log(`row ${index}`);
  const row = arr[index];
  for (const value of row) {
    console.log(`  ${value}`);
  }
}

let obj = {
  name: 'Glenn',
  age: 32,
  address: 'Ratingen',
};

for (const key in obj) {
  console.log(key, obj[key]);
}
console.log(Object.keys[obj]);
